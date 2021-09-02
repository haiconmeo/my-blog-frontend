import React from 'react';

const test = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "size_psd": {
        "width": 3000,
        "height": 3000
      },
      "data": [
        {
          "bbox": {
            "x": 0,
            "y": 0,
            "width": 2700,
            "height": 2700
          },
          "name": "background 1 mèo",
          "type": "image",
          "image_url": "develop/clipart/674113b4-c9e8-48e7-9c35-c7ac3aa99758-background_1_mèo.png"
        },
        {
          "name": "meo",
          "type": "image",
          "bbox": {
            "x": 240,
            "y": 999,
            "width": 1015,
            "height": 883
          },
          "image_url": "develop/clipart/a335eaac-4405-4f7a-ab10-ded12501719d-meo:457.png"
        },
        {
          "name": "Name here ",
          "type": "text",
          "bbox": {
            "x": 502,
            "y": 1834,
            "width": 559,
            "height": 186
          },
          "font_url": "develop/font/7cd4bb89-2495-4b9b-becb-862aec0b25c3-manh.ttf",
          "font_name": "magic-Regular",
          "font_size": 109.53414002711722,
          "text_value": "Name here ",
          "text_color": "#D13939"
        }
      ]
    });
    
    var config = {
      method: 'post',
      url: 'https://dev-api-dewix.omzones.com/api/v2/products/render-svg',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
    return (
        <div>
            
        </div>
    );
};

export default test;