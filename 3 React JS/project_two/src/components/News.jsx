import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
     // when we are making class in js we use contructor
     articles = [
        {
          "source": {
            "id": "engadget",
            "name": "Engadget"
          },
          "author": "Mat Smith",
          "title": "The Morning After: Amazon reportedly exploring free cell phone service for Prime subscribers",
          "description": "According to Bloomberg, Amazon is in discussions with multiple US-based phone carriers about offering cheap – around $10 a month – or even free phone service to Prime customers. The company is reportedly negotiating with Verizon, AT&T and T-Mobile as well as …",
          "url": "https://www.engadget.com/the-morning-after-amazon-reportedly-exploring-free-cell-phone-service-for-prime-subscribers-111534986.html",
          "urlToImage": "https://s.yimg.com/uu/api/res/1.2/HmsvtziJYdqRgOmp6rrD6w--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/f9ec6510-ffeb-11ed-bdff-a4f87fd8a5b3.cf.jpg",
          "publishedAt": "2023-06-05T11:15:34Z",
          "content": "According to Bloomberg, Amazon is in discussions with multiple US-based phone carriers about offering cheap around $10 a month or even free phone service to Prime customers. The company is reportedly… [+3366 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "Apple expected to reveal mixed-reality headset at developer ... - Reuters.com",
          "description": "Apple expected to reveal mixed-reality headset at developer ...  Reuters.com",
          "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYXBwbGUtZXhwZWN0ZWQtcmV2ZWFsLW1peGVkLXJlYWxpdHktaGVhZHNldC1kZXZlbG9wZXItY29uZmVyZW5jZS0yMDIzLTA2LTA1L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          "urlToImage": null,
          "publishedAt": "2023-06-05T11:02:00Z",
          "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "Apple shares hit all-time high ahead of developer conference - Reuters",
          "description": "Apple shares hit all-time high ahead of developer conference  Reuters",
          "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYXBwbGUtc2hhcmVzLWhpdC1hbGwtdGltZS1oaWdoLWFoZWFkLWRldmVsb3Blci1jb25mZXJlbmNlLTIwMjMtMDYtMDUv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          "urlToImage": null,
          "publishedAt": "2023-06-05T13:41:00Z",
          "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
    ]
     constructor (){
        
        // metion super in constructor
        super();
        this.state ={
            articles : this.articles,
        }
    }
  render() {
    return (
      <>
        <div className="container">
          <h3>Headlines</h3>
          <div className="row">



            <div className="col-md-4">
              <NewsItem title="my title" description={"this is descrioption"} imageUrl="" newsUrl={'todo'} />
            </div>
            <div className="col-md-4">
              <NewsItem title="my title" description={"this is descrioption"} />
            </div>
            <div className="col-md-4">
              <NewsItem title="my title" description={"this is descrioption"} />
            </div>



          </div>
        </div>
      </>
    );
  }
}
