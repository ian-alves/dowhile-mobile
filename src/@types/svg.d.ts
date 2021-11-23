declare module "*.svg" {
    import React from "react";
    import Svg, { SvgProps } from "react-native-svg";

    // FC: function component
    const content: React.FC<SvgProps>;

    export default content;
}