import { SvgIcon, SvgIconProps } from "@mui/material";
import { FunctionComponent } from "react";

export const RoadIcon: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} width="576" height="512" viewBox="0 0 576 512">
      <path
        stroke="currentColor"
        d="M304 304C304 312.8 296.8 320 288 320C279.2 320 272 312.8 272 304V208C272 199.2 279.2 192 288 192C296.8 192 304 199.2 304 208V304zM390.4 32C417.3 32 441.3 48.79 450.5 74.04L567.5 394C582.7 435.8 551.8 480 507.4 480H68.64C24.19 480-6.728 435.8 8.529 394L125.5 74.04C134.7 48.79 158.7 32 185.6 32H390.4zM38.59 405C30.96 425.9 46.41 448 68.64 448H271.1V400C271.1 391.2 279.2 384 287.1 384C296.8 384 304 391.2 304 400V448H507.4C529.6 448 545 425.9 537.4 405L420.5 85.02C415.9 72.4 403.9 64 390.4 64H304V112C304 120.8 296.8 128 287.1 128C279.2 128 271.1 120.8 271.1 112V64H185.6C172.1 64 160.1 72.4 155.5 85.02L38.59 405z"
      />
    </SvgIcon>
  );
};
