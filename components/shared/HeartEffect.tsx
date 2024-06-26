import React, { SVGProps, useRef, useState } from "react";

interface CardIdSVGProps extends SVGProps<SVGSVGElement> {
  cardId: string;
}


const HeartEffect = ( props: CardIdSVGProps ) => {

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const heartref = useRef<SVGSVGElement>(null);
  const [key, setKey] = useState(props.cardId);

  return (
      
      <svg xmlns="http://www.w3.org/2000/svg" ref={heartref} xmlnsXlink="http://www.w3.org/1999/xlink" {...props} preserveAspectRatio="xMidYMid meet" viewBox="0 0 720 720">
        <defs>
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_7_G_L_0_G`} fill="freeze" attributeName="opacity" from="1" to="0" keyTimes="0;0.3333333;0.52;0.7333333;1" values="1;1;1;0;0" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_7_G_L_0_G`} fill="freeze" attributeName="transform" from="0.2 0.1865" to="0.65 0.65" type="scale" additive="sum" keyTimes="0;0.3333333;0.6533333;1" values="0.2 0.1865;0.2 0.1865;0.65 0.65;0.65 0.65" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_7_G_L_0_G`} fill="freeze" attributeName="transform" from="-155 -154" to="-155 -154" type="translate" additive="sum" keyTimes="0;0.3333333;1" values="-155 -154;-155 -154;-155 -154" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_7_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.3333333;0.3333333;0.3333356;0.7333333;0.7333334;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_7_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1555556;0.3333333;0.3333356;0.7333333;0.7333334;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_6_G_L_0_G`} fill="freeze" attributeName="opacity" from="1" to="0" keyTimes="0;0.3111111;0.4977778;0.7111111;1" values="1;1;1;0;0" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_6_G_L_0_G`} fill="freeze" attributeName="transform" from="0.14638 0.1365" to="0.65 0.65" type="scale" additive="sum" keyTimes="0;0.3111111;0.6311111;1" values="0.14638 0.1365;0.14638 0.1365;0.65 0.65;0.65 0.65" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_6_G_L_0_G`} fill="freeze" attributeName="transform" from="-155 -154" to="-155 -154" type="translate" additive="sum" keyTimes="0;0.3111111;1" values="-155 -154;-155 -154;-155 -154" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_6_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.3111111;0.3111111;0.3111133;0.7111111;0.7111111;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_6_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1555556;0.3111111;0.3111133;0.7111111;0.7111111;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_5_G_L_0_G`} fill="freeze" attributeName="opacity" from="1" to="0" keyTimes="0;0.2888889;0.4755556;0.6888889;1" values="1;1;1;0;0" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_5_G_L_0_G`} fill="freeze" attributeName="transform" from="0.2 0.1865" to="0.65 0.65" type="scale" additive="sum" keyTimes="0;0.2888889;0.6088889;1" values="0.2 0.1865;0.2 0.1865;0.65 0.65;0.65 0.65" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_5_G_L_0_G`} fill="freeze" attributeName="transform" from="-155 -154" to="-155 -154" type="translate" additive="sum" keyTimes="0;0.2888889;1" values="-155 -154;-155 -154;-155 -154" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_5_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.2888889;0.2888889;0.2888911;0.6888889;0.6888889;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_5_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1555556;0.2888889;0.2888911;0.6888889;0.6888889;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_4_G_L_0_G`} fill="freeze" attributeName="opacity" from="1" to="0" keyTimes="0;0.2444444;0.4311111;0.6444444;1" values="1;1;1;0;0" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_4_G_L_0_G`} fill="freeze" attributeName="transform" from="0.14638 0.1365" to="0.65 0.65" type="scale" additive="sum" keyTimes="0;0.2444444;0.5644444;1" values="0.14638 0.1365;0.14638 0.1365;0.65 0.65;0.65 0.65" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_4_G_L_0_G`} fill="freeze" attributeName="transform" from="-155 -154" to="-155 -154" type="translate" additive="sum" keyTimes="0;0.2444444;1" values="-155 -154;-155 -154;-155 -154" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_4_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.2444444;0.2444444;0.2444467;0.6444444;0.6444445;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_4_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1555556;0.2444444;0.2444467;0.6444444;0.6444445;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_3_G_L_0_G`} fill="freeze" attributeName="opacity" from="1" to="0" keyTimes="0;0.2222222;0.4088889;0.6222222;1" values="1;1;1;0;0" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_3_G_L_0_G`} fill="freeze" attributeName="transform" from="0.09276 0.08650000000000001" to="0.65 0.65" type="scale" additive="sum" keyTimes="0;0.2222222;0.5422222;1" values="0.09276 0.08650000000000001;0.09276 0.08650000000000001;0.65 0.65;0.65 0.65" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_3_G_L_0_G`} fill="freeze" attributeName="transform" from="-155 -154" to="-155 -154" type="translate" additive="sum" keyTimes="0;0.2222222;1" values="-155 -154;-155 -154;-155 -154" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_3_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.2222222;0.2222222;0.2222244;0.6222222;0.6222222;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_3_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1555556;0.2222222;0.2222244;0.6222222;0.6222222;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_2_G_L_0_G`} fill="freeze" attributeName="opacity" from="1" to="0" keyTimes="0;0.2;0.3866667;0.6;1" values="1;1;1;0;0" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_2_G_L_0_G`} fill="freeze" attributeName="transform" from="0.049870000000000005 0.04650000000000001" to="0.65 0.65" type="scale" additive="sum" keyTimes="0;0.2;0.52;1" values="0.049870000000000005 0.04650000000000001;0.049870000000000005 0.04650000000000001;0.65 0.65;0.65 0.65" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_2_G_L_0_G`} fill="freeze" attributeName="transform" from="-155 -154" to="-155 -154" type="translate" additive="sum" keyTimes="0;0.2;1" values="-155 -154;-155 -154;-155 -154" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_2_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.2;0.2;0.2000022;0.6;0.6;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_2_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1555556;0.2;0.2000022;0.6;0.6;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_1_G_L_0_G`} fill="freeze" attributeName="opacity" from="0.77" to="0" keyTimes="0;0.1777778;0.3644444;0.5777778;1" values="0.77;0.77;0.77;0;0" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_1_G_L_0_G`} fill="freeze" attributeName="transform" from="0.06 0.06" to="0.65 0.65" type="scale" additive="sum" keyTimes="0;0.1777778;0.4977778;1" values="0.06 0.06;0.06 0.06;0.65 0.65;0.65 0.65" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_1_G_L_0_G`} fill="freeze" attributeName="transform" from="-155 -154" to="-155 -154" type="translate" additive="sum" keyTimes="0;0.1777778;1" values="-155 -154;-155 -154;-155 -154" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_1_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1777778;0.1777778;0.17778;0.5777778;0.5777778;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_1_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1555556;0.1777778;0.17778;0.5777778;0.5777778;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_0_G_L_0_G`} fill="freeze" attributeName="opacity" from="1" to="0" keyTimes="0;0.1555556;0.3422222;0.5555556;1" values="1;1;1;0;0" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_0_G_L_0_G`} fill="freeze" attributeName="transform" from="0.2 0.1865" to="0.65 0.65" type="scale" additive="sum" keyTimes="0;0.1555556;0.4755556;1" values="0.2 0.1865;0.2 0.1865;0.65 0.65;0.65 0.65" keySplines="0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_0_G_L_0_G`} fill="freeze" attributeName="transform" from="-155 -154" to="-155 -154" type="translate" additive="sum" keyTimes="0;0.1555556;1" values="-155 -154;-155 -154;-155 -154" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_0_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1555556;0.1555556;0.1555578;0.5555556;0.5555556;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1555556;0.1555556;0.1555578;0.5555556;0.5555556;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_1_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1555556;0.1555578;0.7333333;0.7333334;1" values="0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_3_G_L_0_G`} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.4222222;0.7111111;1" values="0 0;0 0;0.6 0.6;0 0" keySplines="0.65 0.01 0.298 1;0.65 0.01 0.298 1;0.555 0 0.556 1" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_3_G_L_0_G`} fill="freeze" attributeName="transform" from="-200.495 -200.5" to="-200.495 -200.5" type="translate" additive="sum" keyTimes="0;0.4222222;1" values="-200.495 -200.5;-200.495 -200.5;-200.495 -200.5" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_3_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.4222222;0.4222222;0.4222244;1" values="0;0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_3_G_M`} fill="freeze" attributeName="opacity" from="0" to="1" keyTimes="0;0.4222222;0.4222244;1" values="0;0;1;1" keySplines="0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_2_G_L_0_G`} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.3111111;0.6;0.8888889;1" values="0 0;0 0;0.6 0.6;0 0;0 0" keySplines="0.65 0.01 0.298 1;0.65 0.01 0.298 1;0.555 0 0.556 1;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_2_G_L_0_G`} fill="freeze" attributeName="transform" from="-200.495 -200.5" to="-200.495 -200.5" type="translate" additive="sum" keyTimes="0;0.3111111;1" values="-200.495 -200.5;-200.495 -200.5;-200.495 -200.5" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_2_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.3111111;0.3111111;0.3111133;0.8888889;0.8888889;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_2_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.3111111;0.3111133;0.8888889;0.8888889;1" values="0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_1_G_L_0_G`} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.1111111;0.4;0.6888889;1" values="0 0;0 0;0.6 0.6;0 0;0 0" keySplines="0.65 0.01 0.298 1;0.65 0.01 0.298 1;0.555 0 0.556 1;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_1_G_L_0_G`} fill="freeze" attributeName="transform" from="-200.495 -200.5" to="-200.495 -200.5" type="translate" additive="sum" keyTimes="0;0.1111111;1" values="-200.495 -200.5;-200.495 -200.5;-200.495 -200.5" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_1_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1111111;0.1111111;0.1111133;0.6888889;0.6888889;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_1_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.1111111;0.1111133;0.6888889;0.6888889;1" values="0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_0_G_L_0_G`} fill="freeze" attributeName="transform" from="0 0" to="0 0" type="scale" additive="sum" keyTimes="0;0.0222222;0.3111111;0.6;1" values="0 0;0 0;0.6 0.6;0 0;0 0" keySplines="0.65 0.01 0.298 1;0.65 0.01 0.298 1;0.555 0 0.556 1;0 0 0 0" calcMode="spline" />
          <animateTransform repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_0_G_L_0_G`} fill="freeze" attributeName="transform" from="-200.495 -200.5" to="-200.495 -200.5" type="translate" additive="sum" keyTimes="0;0.0222222;1" values="-200.495 -200.5;-200.495 -200.5;-200.495 -200.5" keySplines="0 0 1 1;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_0_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.0222222;0.0222222;0.0222244;0.6;0.6;1" values="0;0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate repeatCount="1" dur="1.5s" begin="0s" xlinkHref={`#${key}_R_G_L_0_G_L_0_G_M`} fill="freeze" attributeName="opacity" from="0" to="0" keyTimes="0;0.0222222;0.0222244;0.6;0.6;1" values="0;0;1;1;0;0" keySplines="0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0;0 0 0 0" calcMode="spline" />
          <animate attributeType="XML" attributeName="opacity" dur="2s" from="0" to="1" xlinkHref={`#${key}time_group`} />
        </defs>
        <g id={`${key}_R_G`}>
          <g id={`${key}_R_G_L_1_G_M`}>
            <g id={`${key}_R_G_L_1_G`}>
              <g id={`${key}_R_G_L_1_G_L_7_G_M`}>
                <g id={`${key}_R_G_L_1_G_L_7_G`} transform=" translate(556, 204) scale(0.5, 0.5) translate(-100, -100)">
                  <g id={`${key}_R_G_L_1_G_L_7_G_L_0_G_M`}>
                    <g id={`${key}_R_G_L_1_G_L_7_G_L_0_G`} transform=" translate(100, 98)">
                      <path id={`${key}_R_G_L_1_G_L_7_G_L_0_G_D_0_P_0`} fill="#e647ec" fillOpacity="1" fillRule="nonzero" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                      <path id={`${key}_R_G_L_1_G_L_7_G_L_0_G_D_1_P_0`} stroke="#000000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                    </g>
                  </g>
                </g>
              </g>
              <g id={`${key}_R_G_L_1_G_L_6_G_M`}>
                <g id={`${key}_R_G_L_1_G_L_6_G`} transform=" translate(590, 352) scale(0.55, 0.55) translate(-100, -100)">
                  <g id={`${key}_R_G_L_1_G_L_6_G_L_0_G_M`}>
                    <g id={`${key}_R_G_L_1_G_L_6_G_L_0_G`} transform=" translate(100, 98)">
                      <path id={`${key}_R_G_L_1_G_L_6_G_L_0_G_D_0_P_0`} fill="#f6223f" fillOpacity="1" fillRule="nonzero" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                      <path id={`${key}_R_G_L_1_G_L_6_G_L_0_G_D_1_P_0`} stroke="#000000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                    </g>
                  </g>
                </g>
              </g>
              <g id={`${key}_R_G_L_1_G_L_5_G_M`}>
                <g id={`${key}_R_G_L_1_G_L_5_G`} transform=" translate(536, 512) scale(0.65, 0.65) translate(-100, -100)">
                  <g id={`${key}_R_G_L_1_G_L_5_G_L_0_G_M`}>
                    <g id={`${key}_R_G_L_1_G_L_5_G_L_0_G`} transform=" translate(100, 88)">
                      <path id={`${key}_R_G_L_1_G_L_5_G_L_0_G_D_0_P_0`} fill="#f1ea16" fillOpacity="1" fillRule="nonzero" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                      <path id={`${key}_R_G_L_1_G_L_5_G_L_0_G_D_1_P_0`} stroke="#000000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                    </g>
                  </g>
                </g>
              </g>
              <g id={`${key}_R_G_L_1_G_L_4_G_M`}>
                <g id={`${key}_R_G_L_1_G_L_4_G`} transform=" translate(366, 574) scale(0.7, 0.7) translate(-100, -100)">
                  <g id={`${key}_R_G_L_1_G_L_4_G_L_0_G_M`}>
                    <g id={`${key}_R_G_L_1_G_L_4_G_L_0_G`} transform=" translate(100, 98)">
                      <path id={`${key}_R_G_L_1_G_L_4_G_L_0_G_D_0_P_0`} fill="#f6223f" fillOpacity="1" fillRule="nonzero" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                      <path id={`${key}_R_G_L_1_G_L_4_G_L_0_G_D_1_P_0`} stroke="#000000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                    </g>
                  </g>
                </g>
              </g>
              <g id={`${key}_R_G_L_1_G_L_3_G_M`}>
                <g id={`${key}_R_G_L_1_G_L_3_G`} transform=" translate(186, 504) scale(0.75, 0.75) translate(-100, -100)">
                  <g id={`${key}_R_G_L_1_G_L_3_G_L_0_G_M`}>
                    <g id={`${key}_R_G_L_1_G_L_3_G_L_0_G`} transform=" translate(100, 98)">
                      <path id={`${key}_R_G_L_1_G_L_3_G_L_0_G_D_0_P_0`} fill="#32d4e5" fillOpacity="1" fillRule="nonzero" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                      <path id={`${key}_R_G_L_1_G_L_3_G_L_0_G_D_1_P_0`} stroke="#000000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                    </g>
                  </g>
                </g>
              </g>
              <g id={`${key}_R_G_L_1_G_L_2_G_M`}>
                <g id={`${key}_R_G_L_1_G_L_2_G`} transform=" translate(128, 358) scale(0.8, 0.8) translate(-100, -100)">
                  <g id={`${key}_R_G_L_1_G_L_2_G_L_0_G_M`}>
                    <g id={`${key}_R_G_L_1_G_L_2_G_L_0_G`} transform=" translate(100, 98)">
                      <path id={`${key}_R_G_L_1_G_L_2_G_L_0_G_D_0_P_0`} fill="#f1ea16" fillOpacity="1" fillRule="nonzero" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                      <path id={`${key}_R_G_L_1_G_L_2_G_L_0_G_D_1_P_0`} stroke="#000000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                    </g>
                  </g>
                </g>
              </g>
              <g id={`${key}_R_G_L_1_G_L_1_G_M`}>
                <g id={`${key}_R_G_L_1_G_L_1_G`} transform=" translate(176, 212) scale(0.95, 0.95) translate(-100, -100)">
                  <g id={`${key}_R_G_L_1_G_L_1_G_L_0_G_M`}>
                    <g id={`${key}_R_G_L_1_G_L_1_G_L_0_G`} transform=" translate(101, 93)">
                      <path id={`${key}_R_G_L_1_G_L_1_G_L_0_G_D_0_P_0`} fill="#e647ec" fillOpacity="1" fillRule="nonzero" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                      <path id={`${key}_R_G_L_1_G_L_1_G_L_0_G_D_1_P_0`} stroke="#000000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                    </g>
                  </g>
                </g>
              </g>
              <g id={`${key}_R_G_L_1_G_L_0_G_M`}>
                <g id={`${key}_R_G_L_1_G_L_0_G`} transform=" translate(356, 128) translate(-100, -100)">
                  <g id={`${key}_R_G_L_1_G_L_0_G_L_0_G_M`}>
                    <g id={`${key}_R_G_L_1_G_L_0_G_L_0_G`} transform=" translate(100, 98)">
                      <path id={`${key}_R_G_L_1_G_L_0_G_L_0_G_D_0_P_0`} fill="#4825ce" fillOpacity="1" fillRule="nonzero" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                      <path id={`${key}_R_G_L_1_G_L_0_G_L_0_G_D_1_P_0`} stroke="#000000" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M5 130.53 C5,203.98 65.29,243.12 109.43,278.14 C125,290.51 140,302.15 155,302.15 C170,302.15 185,290.51 200.58,278.14 C244.71,243.12 305,203.98 305,130.53 C305,57.09 222.5,5 155,75.61 C87.5,5 5,57.09 5,130.53z " />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id={`${key}_R_G_L_0_G`}>
            <g id={`${key}_R_G_L_0_G_L_3_G_M`}>
              <g id={`${key}_R_G_L_0_G_L_3_G`} transform=" translate(268, 228) scale(0.89, 0.89) translate(-200, -200)">
                <g id={`${key}_R_G_L_0_G_L_3_G_L_0_G_M`}>
                  <g id={`${key}_R_G_L_0_G_L_3_G_L_0_G`} transform=" translate(200, 202)">
                    <path id={`${key}_R_G_L_0_G_L_3_G_L_0_G_D_0_P_0`} fill="#f9ec00" fillOpacity="1" fillRule="nonzero" d=" M398.49 201.83 C231.4,217.78 217.56,231.52 200.5,398.5 C183.43,231.29 169.59,217.36 2.5,199.17 C169.6,183.22 183.43,169.48 200.5,2.5 C217.56,169.71 231.4,183.64 398.49,201.83z " />
                    <path id={`${key}_R_G_L_0_G_L_3_G_L_0_G_D_1_P_0`} stroke="#231f20" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M398.49 201.83 C231.4,217.78 217.56,231.52 200.5,398.5 C183.43,231.29 169.59,217.36 2.5,199.17 C169.6,183.22 183.43,169.48 200.5,2.5 C217.56,169.71 231.4,183.64 398.49,201.83z " />
                  </g>
                </g>
              </g>
            </g>
            <g id={`${key}_R_G_L_0_G_L_2_G_M`}>
              <g id={`${key}_R_G_L_0_G_L_2_G`} transform=" translate(444, 492) scale(0.47, 0.47) translate(-200, -200)">
                <g id={`${key}_R_G_L_0_G_L_2_G_L_0_G_M`}>
                  <g id={`${key}_R_G_L_0_G_L_2_G_L_0_G`} transform=" translate(200, 202)">
                    <path id={`${key}_R_G_L_0_G_L_2_G_L_0_G_D_0_P_0`} fill="#f9ec00" fillOpacity="1" fillRule="nonzero" d=" M398.49 201.83 C231.4,217.78 217.56,231.52 200.5,398.5 C183.43,231.29 169.59,217.36 2.5,199.17 C169.6,183.22 183.43,169.48 200.5,2.5 C217.56,169.71 231.4,183.64 398.49,201.83z " />
                    <path id={`${key}_R_G_L_0_G_L_2_G_L_0_G_D_1_P_0`} stroke="#231f20" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M398.49 201.83 C231.4,217.78 217.56,231.52 200.5,398.5 C183.43,231.29 169.59,217.36 2.5,199.17 C169.6,183.22 183.43,169.48 200.5,2.5 C217.56,169.71 231.4,183.64 398.49,201.83z " />
                  </g>
                </g>
              </g>
            </g>
            <g id={`${key}_R_G_L_0_G_L_1_G_M`}>
              <g id={`${key}_R_G_L_0_G_L_1_G`} transform=" translate(474, 278) scale(0.92, 0.92) translate(-200, -200)">
                <g id={`${key}_R_G_L_0_G_L_1_G_L_0_G_M`}>
                  <g id={`${key}_R_G_L_0_G_L_1_G_L_0_G`} transform=" translate(200, 202)">
                    <path id={`${key}_R_G_L_0_G_L_1_G_L_0_G_D_0_P_0`} fill="#f9ec00" fillOpacity="1" fillRule="nonzero" d=" M398.49 201.83 C231.4,217.78 217.56,231.52 200.5,398.5 C183.43,231.29 169.59,217.36 2.5,199.17 C169.6,183.22 183.43,169.48 200.5,2.5 C217.56,169.71 231.4,183.64 398.49,201.83z " />
                    <path id={`${key}_R_G_L_0_G_L_1_G_L_0_G_D_1_P_0`} stroke="#231f20" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M398.49 201.83 C231.4,217.78 217.56,231.52 200.5,398.5 C183.43,231.29 169.59,217.36 2.5,199.17 C169.6,183.22 183.43,169.48 200.5,2.5 C217.56,169.71 231.4,183.64 398.49,201.83z " />
                  </g>
                </g>
              </g>
            </g>
            <g id={`${key}_R_G_L_0_G_L_0_G_M`}>
              <g id={`${key}_R_G_L_0_G_L_0_G`} transform=" translate(252, 444) scale(0.54, 0.54) translate(-200, -200)">
                <g id={`${key}_R_G_L_0_G_L_0_G_L_0_G_M`}>
                  <g id={`${key}_R_G_L_0_G_L_0_G_L_0_G`} transform=" translate(200, 202)">
                    <path id={`${key}_R_G_L_0_G_L_0_G_L_0_G_D_0_P_0`} fill="#f9ec00" fillOpacity="1" fillRule="nonzero" d=" M398.49 201.83 C231.4,217.78 217.56,231.52 200.5,398.5 C183.43,231.29 169.59,217.36 2.5,199.17 C169.6,183.22 183.43,169.48 200.5,2.5 C217.56,169.71 231.4,183.64 398.49,201.83z " />
                    <path id={`${key}_R_G_L_0_G_L_0_G_L_0_G_D_1_P_0`} stroke="#231f20" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeWidth="2" strokeOpacity="1" d=" M398.49 201.83 C231.4,217.78 217.56,231.52 200.5,398.5 C183.43,231.29 169.59,217.36 2.5,199.17 C169.6,183.22 183.43,169.48 200.5,2.5 C217.56,169.71 231.4,183.64 398.49,201.83z " />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id={`${key}time_group"`} />
    </svg>
  );
}

export default HeartEffect;

