// Copyright (c) 2024 Julianne Leblanc-Peltier All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  // input
  const radiusOfSphere = parseFloat(document.getElementById("radius-of-sphere").value)

  // process
  const volumeOfSphere = 4 / 3 * (Math.PI * radiusOfSphere**3)

  // output
  document.getElementById("volume-of-sphere").innerHTML = volumeOfSphere.toFixed(2) + " mm³"
}
