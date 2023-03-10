/* 
* created a server.
* HMR - Hot Module Reloading
* Bundling
* MINIFY
* Cleaning our code
* Dev(npx parcel index-react.html) and production build(npx parcel build index-react.html)
* Super Fast Build Algorithm
* Image Optimization
* Caching while development
* compression
* compatible with older version of browser
* Https on Dev (npx parcel index-react.hml --https)
* Parcel Manages port number(when running different project using parcel, it automatically runs port)
* consistent Hashing Algorithm
* Zero Config Bundler
* Transitive Dependencies 
*
*
*/

import React from "react"; 
import  ReactDOM  from "react-dom/client";
 // const div=document.getElementById("hi");
 const span=React.createElement("span", null, "Hi")

 const Logo = <a href="/"> 
                    <img alt="Logo" width={100} 
                    src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"/>
              </a>

const cardList=  [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "36569",
        "name": "Hotel Empire",
        "uuid": "0face50c-49fa-4714-8bb4-2384ac25b6e1",
        "city": "1",
        "area": "JP Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "udezyaggnsuz2rjx6mce",
        "cuisines": [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "empire-restaurant-jp-nagar-jp-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "\"#1, Sarakkikere Village,Uttarahalli HobliJP Nagar\"",
        "locality": "JP Nagar",
        "parentId": 475,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6108485~p=1~eid=00000186-cc78-e5c6-0f2f-1fb800810178",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "36569",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "167101",
        "name": "Meghana Foods",
        "uuid": "9bdcbf89-5b7d-497f-abc4-0e6ddc0048fd",
        "city": "1",
        "area": "Arakere",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "cvo1djhbwrgfqd64k0tl",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 0.4000000059604645,
        "slugs": {
          "restaurant": "meghana-foods-arekere-arekere",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No. 23/1,Bannerghatta Road, Arekere Village, Begur Hobli, Bangalore",
        "locality": "Bannergatta Main Road",
        "parentId": 635,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FREE DELIVERY",
          "shortDescriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "167101",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 0.4000000059604645,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "661014",
        "name": "Shawarma On Wheels",
        "uuid": "cf1590c7-60b9-4deb-bf59-7fed15895862",
        "city": "1",
        "area": "Arekere",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "6712442cb87c9bfa516eb9c9518935c9",
        "cuisines": [
          "Arabian",
          "Snacks",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "shawarma-secrets-arekere-arekere",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "NO.44/8, SITUATED AT PUTTENAHALLI BANGALORE 560078",
        "locality": "J P Nagar",
        "parentId": 396759,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6061687~p=4~eid=00000186-cc78-e5c6-0f2f-1fb90081042f",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "661014",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "121603",
        "name": "Kannur Food Point",
        "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
        "city": "1",
        "area": "Tavarekere",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
        "cuisines": [
          "Kerala",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 5.800000190734863,
        "slugs": {
          "restaurant": "kannur-food-point-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
        "locality": "SG Palya",
        "parentId": 20974,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FREE DELIVERY",
          "shortDescriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            },
            {
              "meta": "50% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            },
            {
              "meta": "50% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            },
            {
              "meta": "50% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "121603",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 5.800000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "337335",
        "name": "Kannur food kitchen",
        "uuid": "c70b61bc-0f68-4e24-996b-749fbf295c35",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "a27weqanhnszqiuzsoik",
        "cuisines": [
          "Kerala",
          "Biryani",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "kannur-food-kitchen-btm-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
        "locality": "1st  Stage",
        "parentId": 114756,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FREE DELIVERY",
          "shortDescriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            },
            {
              "meta": "50% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            },
            {
              "meta": "50% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            },
            {
              "meta": "50% off on all orders",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "337335",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "392745",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "uuid": "6bf412e6-24d9-48be-85b8-5cd536658ece",
        "city": "1",
        "area": "Arekere",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "pkhkmke7oj3yzsicu0op",
        "cuisines": [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 2.299999952316284,
        "slugs": {
          "restaurant": "leon-grill-arekere-arekere",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No.503/A, BTM Layout 2nd Block, 6th Stage , Bengaluru, BTM Layout, B.B.M.P South, Karnataka-560070",
        "locality": "6th Stage",
        "parentId": 371281,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6147719~p=16~eid=00000186-cc78-e5c6-0f2f-1fbd0081100a",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "392745",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "lastMileTravel": 2.299999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "56589",
        "name": "Roti Wala",
        "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ptetuqkrhmpd8tiqiztg",
        "cuisines": [
          "North Indian",
          "Home Food",
          "Thalis",
          "Chinese",
          "Punjabi",
          "South Indian",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "roti-wala-lavelle-road-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#239, 7TH Cross, Btm Stage 2. NS Palya, 560076",
        "locality": "2nd Stage",
        "parentId": 171678,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹100 | Use code GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹100 | Use code GUILTFREE",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "56589",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "428",
        "name": "Biryani Pot",
        "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
        "cuisines": [
          "North Indian",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 5.800000190734863,
        "slugs": {
          "restaurant": "biryani-pot-madiwala-junction-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
        "locality": "Maruti Nagar",
        "parentId": 21798,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "428",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 5.800000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "512677",
        "name": "Easy Bites by Hotel Empire",
        "uuid": "248afd8e-a092-469b-80a2-b876b68cb0fe",
        "city": "1",
        "area": "Uttarahalli",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "d06b7fa84cb8f8193f60d4c2de172347",
        "cuisines": [
          "Snacks",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 6.300000190734863,
        "slugs": {
          "restaurant": "hotel-empire-kanakapura-road-kanakapura-road",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "NO.O2, BANK OFFICERS AND OFFICIALS HOUSE BUILDING COOPERATIVE SOCiETY LTD, DODDAKALLASANDRA 1ST STAGE, UTTARAHALLI HOBLI, WARD NO.197, BANGALORE., R R Nagara, 560005",
        "locality": "DODDAKALLASANDRA",
        "parentId": 8503,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6108920~p=10~eid=00000186-cc78-e5c6-0f2f-1fbb00810a48",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "512677",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 6.300000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "173588",
        "name": "Madeena Hotel",
        "uuid": "2d30bd2b-5c54-4f56-b614-5659d7ddf701",
        "city": "1",
        "area": "BTM Layout",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "rd18qpcppcy8kykapqnp",
        "cuisines": [
          "Indian",
          "Biryani",
          "Mughlai",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "madeena-hotel-test-prod-area",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "# 10/20 ,1st Main Road ,Old Gurappanpalya, Bannerghatta Main Road Bengalure",
        "locality": "Old Gurappanpalya",
        "parentId": 12517,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FREE DELIVERY",
          "shortDescriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "173588",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "434918",
        "name": "Falhari - A Fruitful Habit",
        "uuid": "d723a5ac-6291-44f6-a8d8-e62d2241ed3b",
        "city": "1",
        "area": "Tavarekere",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "hbpel7wiienbuq60t3xg",
        "cuisines": [
          "Salads",
          "Juices",
          "Beverages",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 5.800000190734863,
        "slugs": {
          "restaurant": "falhari-btm-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#09, Shop no-3  1st Main, 4th cross venkateshwara Layout SG Palaya, DRC post, Bangalore - 560029",
        "locality": "SG Palya",
        "parentId": 13818,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6093841~p=13~eid=00000186-cc78-e5c6-0f2f-1fbc00810d23",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "434918",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 5.800000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "82962",
        "name": "Kabab Mehal",
        "uuid": "d63d910c-fcd7-46fb-a99e-c8c57fcc7225",
        "city": "1",
        "area": "Kanakapura Road",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "fdgfcrdbiljqlqmchdcy",
        "cuisines": [
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 6.300000190734863,
        "slugs": {
          "restaurant": "kabab-mahal-kanakapura-road-test-prod-area",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No.61/2A,63,64 Banashankari 5th Stage,Raghuvanahalli,kanakapura main road, Bangalore.",
        "locality": "Raghuvanahalli",
        "parentId": 5679,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FREE DELIVERY",
          "shortDescriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "82962",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 6.300000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "64131",
        "name": "Truffles",
        "uuid": "426b2a38-9b4f-4543-9ca9-42468b17ee3a",
        "city": "1",
        "area": "JP Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
        "cuisines": [
          "American",
          "Continental",
          "Desserts",
          "Italian",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "slaString": "39 MINS",
        "lastMileTravel": 4.400000095367432,
        "slugs": {
          "restaurant": "truffles-jp-nagar-jp-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Kodak Kwick Photo Express, Kanakpura Road, Gangadhar Nagar, 1st Phase, JP Nagar",
        "locality": "1st Phase",
        "parentId": 218065,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "64131",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "lastMileTravel": 4.400000095367432,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "553901",
        "name": "Shanmukha Restaurant",
        "uuid": "78d269cd-b07d-4dc5-be7d-2c6938690fdc",
        "city": "1",
        "area": "Bannerghatta Road",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "kqccbkcuuaojz0jhkp0p",
        "cuisines": [
          "Biryani",
          "Hyderabadi",
          "Andhra",
          "North Indian",
          "South Indian",
          "Chinese",
          "Seafood",
          "Tandoor",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 2.9000000953674316,
        "slugs": {
          "restaurant": "shanmukha-restaurant-kalena-agrahara-kalena-agrahara",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "SY NO.98/2,KHATHA NO.3204/25,SITUATED AT ABBAYAPPA LAYOUT,KAMMANAHALLI VILLAGE,BEGUR HOBLI,BANGALORE560069",
        "locality": "",
        "parentId": 9954,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6146847~p=22~eid=00000186-cc78-e5c6-0f2f-1fbf00811652",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.9 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "553901",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 2.9000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "588705",
        "name": "La Pino'z Pizza",
        "uuid": "be6a463f-42f2-49d6-a88d-331c92a1a812",
        "city": "1",
        "area": "JP Nagar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "w6roonblq3fa5wrtlgys",
        "cuisines": [
          "Italian",
          "Pizzas",
          "Mexican",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "slaString": "35 MINS",
        "lastMileTravel": 2.700000047683716,
        "slugs": {
          "restaurant": "la-pino'z-pizza-jp-nagar-jp-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#309,1ST FLOOR,100 FEET RING ROAD,NEAR DELMIACIRCLE,J P NAGAR,5TH PHASE,BANGALORE, BTM Layout , B.B.M.P South, Karnataka-560078",
        "locality": "5TH Phase",
        "parentId": 4961,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FREE DELIVERY",
          "shortDescriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            {
              "meta": "Free Delivery",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FREE DELIVERY",
              "discountType": "FREE_DELIVERY",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            
          ],
          "totalFees": 0,
          "message": "",
          "title": "",
          "amount": "",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "588705",
          "deliveryTime": 35,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 35,
          "lastMileTravel": 2.700000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    }
  ]

const Card = ({restaurant})=> {
    return (
        <div className="card">
            <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + restaurant.cloudinaryImageId} />
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.cuisines.join(', ')}</h3>
            <h4>{restaurant.avgRating} stars</h4>
        </div>
    );
}

 const Header =()=>{
    return (
        <div className="header">
            {Logo}     {/* React Element */}            
            <ul className="list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    );
 }

 const Body =()=>{
    return (
        <div className="cardList">
            {cardList.map((card) =>{
                return <Card restaurant={card.data}/>
            })}
        </div>
    );
 }

 const Footer = ()=>{
    return (
        <h1>Footer</h1>
    );
 }



 const AppLayout =() => {
    return (
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    );
 }


 const root = ReactDOM.createRoot(document.getElementById("hi"));
 root.render(<AppLayout/>)