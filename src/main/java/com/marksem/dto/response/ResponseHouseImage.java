package com.marksem.dto.response;

import com.marksem.entity.house.HouseImage;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseHouseImage extends BaseEntity {
    private String url;
    private Long houseId;

    public ResponseHouseImage(HouseImage hi) {
        super(hi);
        this.url = hi.getUrl();
        this.houseId = hi.getHouse().getId();
    }
}
