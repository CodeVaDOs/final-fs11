package com.marksem.dto.response;

import com.marksem.entity.booking.FeedBack;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ResponseFeedBack extends BaseEntity {
    private String review;
    private int rating;

    public ResponseFeedBack(FeedBack fb) {
        super(fb);
        this.review = fb.getReview();
        this.rating = fb.getRating();
    }
}
