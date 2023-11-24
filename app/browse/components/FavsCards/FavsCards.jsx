import React from 'react'

export default function FavsCards() {


  return (
<>
    
    <div className="boxart-size-7x10 boxart-container boxart-rounded" style={{position:"absolute",display:"flex", justifyContent:"center",
     alignItems:"start", flexDirection:"column", marginTop:"-80px", zIndex:"10",  background: "linear-gradient(to bottom, transparent 0%, #101010 15%)", paddingTop:"10px"  }}>
        
        <h1 style={{fontSize:"25px", fontWeight:"bold", marginLeft:"35px"}}>Series Más vistas en Getflex</h1>

        <div className="flex justify-center items-center">

        <svg id="rank-1" width="5%"  viewBox="-20 0 70 154" className="svg-icon svg-icon-rank-1 top-10-rank">
            <path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"></path>
        </svg>
                <img style={{width:"11%", borderRadius:"20px"}} class="boxart-image-in-padded-container" src="https://occ-0-2917-185.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABX0acz4vi1ZT6Pc8ZFxM9fJKXNVrOVfJyI2VkbDl6DZEIZWEyiEO7q8d5yCzxDUf5PxHuRn32ry61KkZof-xOlaqAUr5MSySGgnR-SWk1dkXdYFYmv7wyHobYd5OE7KHGAmVY_N4NATDRpDvuIUhsMGoHY7PsHhEbsS2HBiiwOQgWcRxu_M0B0Gvieyo6ytfvPiim2HpU6W-r3qNSEBQc10Fq8PJ8EF24pKAXDWpcYAsyVH_wt7fRX7d8Msl9WWXjseQ-3-ATJlkaL2poM3f0jSWDGnjCgnD27jhrXQFQox-aVqaMBqvGmQiwqC6.jpg?r=a26" alt=""/>
                
                
                <svg id="rank-2" width="5%" height="100%" viewBox="0 0 80 154" class="svg-icon svg-icon-rank-2 top-10-rank">
                  <path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z">
                  </path>
                </svg>

                <img style={{width:"11%", borderRadius:"20px"}} class="boxart-image-in-padded-container" src="https://occ-0-2917-185.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTrPn28-J3jdTCAtKkxeoNEgieBmzoBzS47VRiB17y8ODOO8j4EWbrOBfksmVJuYb66Qg7z9bzuFhyVkcRvPQBaXdAxQtED1XITFl2091IJAOB5Gn2pJMoi5jsSuy9slIn5jAE787ULZZ1RXubY67PRkKwJgQuqwhQoFVyFDbJHQ_XLLdspVWVpEq6a1gSgvfwH72bVrXgjNICfbjHqtj0Kmifgp92CXdCRo5ly3ihONqTVMA8I4F4RCbn0uo6Q1lHVF3JlrI6EQLXHAekqf5J58CLNYptNAG61jSuRcLf2b4voD9ly5fsbdFrim.jpg?r=52b" alt=""></img>
                
                
                <svg id="rank-3" width="5%" height="100%" viewBox="0 0 80 154" class="svg-icon svg-icon-rank-3 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"></path></svg>        
                <img style={{width:"11%", borderRadius:"20px"}} class="boxart-image-in-padded-container" src="https://occ-0-2917-185.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZtp37B333vszaXPRwOwJQxtj0hft5cXKUWONfZSsHpNGmpXSIQJobXIwe7Yu5EFjDl6LJaTMoksRjm3O0Wg4kNvn1MBWwoC7rdx9_SIRtoMyhIy4k74mYhaHvFqwvp7UILnf3qUITy4H-TED2cg-NGIhwl_6meA3n8wUnDTWz8TpqB0wmncwsbgV69cLLNSA5BK67UH2Bjl8P1RLGuRETtrEH3YzLP4MmyJVJpKm5UezwBxyap5NnSC-_kGWxg0jkci18Fuemq3ZvW6hytCGIGglT6bJnAyLs5CnQMsrNRfScIq3vjoNqsrbC2P.jpg?r=f9b" alt=""></img>
                
                
                <svg id="rank-4" width="5%" height="100%" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-4 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z"></path></svg>
                <img style={{width:"11%", borderRadius:"20px"}} class="boxart-image-in-padded-container" src="https://occ-0-2917-185.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZ36jHawMxpWjTJ66FKjwWijJ9EmOq8vzE2W3LhQXGupiPab3zWXoJBGhDWcO8mp49Q7MWtowqk7xOZ6tRAMgjyA0bl3NNNEP7dpUHaWSuLYOcg6exgJnTNtjwyRhPzwLz3F3yTxYWEjjXfDj-cNUB7g69lgtw2gv_qk0HWScs5OgO0P93_Gg-2WWu5p5d6-0FrO5fUb--aFfSwp1Sk1q7s1nwmXsrk2Oyh5FIQ__7JY51kK4C6fDUUIJsffCLsMsh18K3X7__KAs3aQzQhfDoaIowkAVV1ZReFRb8OubV55Q4ZMSxPTaUNM0wU.jpg?r=f58" alt=""></img>

                <svg id="rank-5" width="5%" height="100%" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-5 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z"></path></svg>
                <img style={{width:"11%", borderRadius:"20px"}} class="boxart-image-in-padded-container" src="https://occ-0-2917-185.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABeg7vZs2xgZFWgLNSIN0rHFEPKVYZU9Z4MzjPM5ciyxPrgX1oOcvHdmoSBst3BqAdS-KAFEhxoV4Pa2x-THA56bbv1ViFg9NrMp6KxypRpVoiQ1pkN6skZZF23E4HJPcwTd_5kYxw-JZ5KQz5OOS7ruxXM0-NUZ_FyUVP-Ry1PaJZkXC45hvgemeKES33mMkG3_HwWXVZQz9xIDNDoJq3o0ppS1tJ_EWlU1P0HM62wIs7eC3ENw05GvnjHmMBOpymsbjO350jKuQEyct4varw3eMHuJcQIat5tJS1e2pEHtfsq_pelkQ4_BpyeIm.jpg?r=420" alt=""></img>

                <svg id="rank-6" width="5%" height="100%" viewBox="0 0 81 154" class="svg-icon svg-icon-rank-6 top-10-rank"><path stroke="#595959" stroke-linejoin="square" stroke-width="4" d="M79.482 38.192h35.551c-3.284-10.945-8.963-19.573-17.048-25.938C89.323 5.434 77.531 2 62.545 2 50.756 2 40.35 4.86 31.277 10.577c-9.064 5.712-16.198 14.09-21.412 25.178C4.63 46.893 2 60.425 2 76.365c0 14.416 2.356 27.344 7.059 38.798 4.667 11.368 11.573 20.34 20.734 26.956C38.904 148.7 50.225 152 63.816 152a61.513 61.513 0 0019.922-3.278 53.546 53.546 0 0017.378-9.792c5.154-4.33 9.255-9.64 12.314-15.947 3.042-6.273 4.57-13.556 4.57-21.868 0-8.812-2.062-16.636-6.182-23.51-4.134-6.897-9.643-12.293-16.55-16.212-6.905-3.917-14.48-5.874-22.76-5.874-14.546 0-25.34 4.55-32.569 13.63l-4.003 5.03.443-6.413c.874-12.636 3.56-21.85 8.168-27.654 4.69-5.907 10.885-8.9 18.421-8.9 4.26 0 7.826.734 10.685 2.24 2.445 1.287 4.396 2.867 5.829 4.74zM62.605 123c-5.825 0-10.902-1.894-15.136-5.655C43.173 113.528 41 108.603 41 102.71c0-5.881 2.164-10.864 6.44-14.818C51.674 83.975 56.762 82 62.604 82c5.847 0 10.906 1.98 15.074 5.905C81.878 91.859 84 96.837 84 102.71c0 5.885-2.131 10.805-6.35 14.622-4.167 3.77-9.214 5.668-15.045 5.668z"></path></svg>
                <img style={{width:"11%", borderRadius:"20px"}} class="boxart-image-in-padded-container" src="https://occ-0-2917-185.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABYRZCKJVZTFfZJIsqAeFuyyJrHJWPg4faSEepLWrZMWDPlDYAWC57ylgOR_H78GpDH_OgcQ5CQhC9bEjLo7m8hyiP3y3_OKtXUcFJkEIg6e_Bwvx3jJGurW8JuYkIlfcjRRlHGANw-jXZe3uZC2RKaQwX3xIhEwZCWkTKmh0vgXufRZHFRMkzBhCAPO95h2u8-ohmzKCbAgBb-58GXMeZagmNL4x5xqUxPwO5pWz9D5wbjJRhlwsNlYVJvb1Qgx5Ppx7sLgLyRa5O-6QCj-leKjWyJe9CBFfoiw7YSWv1MmGzfUUSo-O-C0or6_w.jpg?r=3f6" alt=""></img>



        </div>


    </div>
    
</>

  )

}
