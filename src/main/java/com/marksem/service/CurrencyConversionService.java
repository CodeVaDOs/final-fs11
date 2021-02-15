package com.marksem.service;

import com.marksem.entity.transaction.Currency;
import lombok.AllArgsConstructor;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
@AllArgsConstructor
public class CurrencyConversionService {
  private final String API_CONVERSION_URL = "https://api.exchangerate.host";
  private final RestTemplate restTemplate;
  private final ObjectMapper objectMapper;

  public Double convert(Double amount, Currency currencyFrom, Currency currencyTo) {
    if(currencyFrom == currencyTo) {
      return amount;
    }
    return this.fetchDataCurrency("/latest", amount, currencyFrom, currencyTo)
        .get(currencyTo.toString());
  }

  public Double convert(Double amount, Currency currencyFrom, Currency currencyTo, Date date) {
    if(currencyFrom == currencyTo) {
      return amount;
    }

    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    String strDate = dateFormat.format(date);

    return this.fetchDataCurrency("/" + strDate, amount, currencyFrom, currencyTo)
        .get(currencyTo.toString());
  }

  private Map<String, Double> fetchDataCurrency(String urlPath, Double amount, Currency currencyFrom, Currency currencyTo) {
    HttpHeaders headers = new HttpHeaders();
    headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);
    HttpEntity<?> httpEntity = new HttpEntity<>(headers);

    ResponseEntity<String> convertResponse = restTemplate.exchange(
        UriComponentsBuilder.fromHttpUrl(API_CONVERSION_URL + urlPath)
            .queryParam("base", currencyFrom)
            .queryParam("amount", amount)
            .queryParam("symbols", currencyTo).toUriString(),
        HttpMethod.GET, httpEntity, String.class);

    String json = convertResponse.getBody();
    Map<String, Double> rates = new HashMap<>();

    try {
      JsonNode jsonNode = this.objectMapper.readTree(json);
      rates = this.objectMapper.readValue(jsonNode.get("rates"), HashMap.class);
    } catch (IOException e) {
      e.printStackTrace();
    }

    return rates;
  }


}
