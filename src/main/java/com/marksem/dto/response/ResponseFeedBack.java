package com.marksem.dto.response;

import com.marksem.entity.booking.FeedBack;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class ResponseFeedBack {
    private String review;
    private int rating;

    public static ResponseFeedBack toDto(FeedBack fb) {
        if(fb != null){
            return ResponseFeedBack.builder()
                    .review(fb.getReview())
                    .rating(fb.getRating())
                    .build();
        }
        else return null;
    }
}
