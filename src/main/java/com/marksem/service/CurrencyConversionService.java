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
import java.util.HashMap;
import java.util.Map;

@Service
@AllArgsConstructor
public class CurrencyConversionService {
  private final String API_CONVERSION_URL = "https://api.exchangerate.host/latest";
  private final RestTemplate restTemplate;
  private final ObjectMapper objectMapper;

  public Double convert(Double amount, Currency currencyFrom, Currency currencyTo) {
    if(currencyFrom == currencyTo) {
      return amount;
    }

    HttpHeaders headers = new HttpHeaders();
    headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);
    HttpEntity<?> httpEntity = new HttpEntity<>(headers);

    ResponseEntity<String> convertResponse = restTemplate.exchange(
        UriComponentsBuilder.fromHttpUrl(API_CONVERSION_URL)
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

    return rates.get(currencyTo.toString());
  }

}
