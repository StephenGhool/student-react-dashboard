import React, { useEffect, useMemo, useState } from "react";
import "./script"

export function Sidebar(props){
    
    
    return <div>
                <head>
                    <meta charset="UTF-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    
               
                    <link rel="stylesheet" href="./app.css"/>
                
                  
                    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'/>
                    
                </head>
                <body> 
                <nav class="sidebar close">
                   
                    <div class="menu-bar">
                        <div class="menu">

                            <ul class="menu-links">
                                <li data-tab-target="#Overview" class="nav-link">
                                    <a href="#">
                                        <i class='bx bx-home-alt icon'></i>
                                        <span class="text nav-text">Overview</span>
                                    </a>
                                </li>

                                <li data-tab-target="#Performance" class="nav-link">
                                    <a href="#" class >
                                        <i class='bx bx-bar-chart-alt-2 icon'></i>
                                        <span class="text nav-text">Performance</span>
                                    </a>
                                </li>

                                <li class="nav-link">
                                    <a href="#">
                                        <i class='bx bx-bell icon'></i>
                                        <span class="text nav-text">Notifications</span>
                                    </a>
                                </li>

                                <li class="nav-link">
                                    <a href="#">
                                        <i class='bx bx-pie-chart-alt icon' ></i>
                                        <span class="text nav-text">Analytics</span>
                                    </a>
                                </li>

                                <li class="nav-link">
                                    <a href="#">
                                        <i class='bx bx-heart icon' ></i>
                                        <span class="text nav-text">Likes</span>
                                    </a>
                                </li>

                                <li class="nav-link">
                                    <a href="#">
                                        <i class='bx bx-wallet icon' ></i>
                                        <span class="text nav-text">Wallets</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        

                        <div class="bottom-content">
                            <li class="">
                                <a href="#">
                                    <i class='bx bx-log-out icon' ></i>
                                    <span class="text nav-text">Logout</span>
                                </a>
                            </li>

                            
                            
                        </div>
                    </div>

                </nav>
                
                
        <script src="script.js" defer></script>
                </body>
                 
        
    </div>
}