type colorsType = {
  contrast: string
  brand: string
  accent1: string
  accent2: string
  accent3: string
  accent4: string
  neutral1: string
  neutral2: string
  neutral3: string
  neutral4: string
  statusCritical: string
  statusError: string
  statusWarning: string
  statusOk: string
  statusUnknown: string
  statusDisabled: string
  light1: string
  light2: string
  light3: string
  light4: string
  light5: string
  light6: string
  dark1: string
  dark2: string
  dark3: string
  dark4: string
  dark5: string
  dark6: string
}

type fontSizeType = {
  xxxs: string
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
  xxxxl: string
}

type breakpointsType = {
  sm: string
  md: string
  lg: string
  xl: string
}

export interface ThemeInterface {
  fontSize: fontSizeType
  colors: colorsType
  breakpoints: breakpointsType
}
