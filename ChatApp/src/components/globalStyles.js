import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

// Splash Screen
const SPLASH_BACKGROUND_COLOR = '#FFFFFF';
const SPLASH_TITLE_FONT_SIZE = 0.05 * height;
const SPLASH_TITLE_COLOR = '#001815';
const SPLASH_LOGO_WIDTH = 0.5 * width;
const SPLASH_LOGO_HEIGHT = 0.2 * height;

// Onboarding Screen
const ONBOARDING_PADDING_HORIZONTAL = 0.85 * width * 0.05;
const ONBOARDING_TITLE_MARGIN = 0.02 * height * 0.3;
const ONBOARDING_TITLE1_MARGIN = 0.02 * height * 0.2;
const ONBOARDING_SPLASH_LOGO_HEIGHT = 0.2 * height * 0.16;
const ONBOARDING_SPLASH_LOGO_WIDTH = 0.5 * width * 0.55;
const ONBOARDING_CONTAINER_BUTTON_WIDTH = 0.85 * width * 0.1;
const ONBOARDING_BACKGROUND_COLOR = '#1E1E1E';
const ONBOARDING_TITLE_FONT_SIZE = 0.04 * height * 2.05;
const ONBOARDING_TITLE1_FONT_SIZE = 0.04 * height * 2.09;
const ONBOARDING_TITLE_LINE_HEIGHT = 0.04 * height * 2.09;
const ONBOARDING_TITLE_COLOR = '#FFFFFF';
const ONBOARDING_SUBTITLE_FONT_SIZE = 0.02 * height * 0.8;
const ONBOARDING_SUBTITLE_MARGIN = 0.02 * height * 2;
const ONBOARDING_SUBTITLE_COLOR = '#B9C1BE';
const ONBOARDING_SOCIALBUTTON_MARGIN = 0.02 * height * 1.5;
const ONBOARDING_SOCIALBUTTON_HW = 0.85 * width * 0.16;
const ONBOARDING_SOCIALBUTTON_RADIUS = 0.018 * height * 5;
const ONBOARDING_SOCIALICON_HW = 0.85 * width * 0.11;
const ONBOARDING_LINE_MARGIN = 0.02 * height * 0.6;
const ONBOARDING_OR_FONT_SIZE = 0.02 * height * 1.2;
const ONBOARDING_TEXT_FONT_SIZE = 0.02 * height;
const ONBOARDING_BUTTON_TEXT_COLOR = '000E08';
const ONBOARDING_OR_COLOR = "#D6E4E0";
const ONBOARDING_RULER_COLOR = "#CDD1D0";

// Sign in and Sign up
const SIGNIN_BACKGROUND_COLOR = '#FFFFFF';
const SIGNIN_TITLE_FONT_SIZE = 0.04 * height;
const SIGNIN_TITLE_COLOR = '#000E08';
const SIGNIN_OR_COLOR = "#797C7B";
const SIGNIN_RULER_COLOR = "#CDD1D0";
const SIGNIN_TEXT_COLOR = "#24786D";
const SIGNIN_BUTTON_COLOR = '#F3F6F6';
const SIGNIN_BUTTON_TEXT_COLOR = '#797C7B';
const SIGNIN1_BUTTON_COLOR = '#24786D';
const SIGNIN1_BUTTON_TEXT_COLOR = '#FFFFFF';

// Input Fields
const INPUT_HEIGHT = 0.075 * height;
const INPUT_WIDTH = 0.8 * width;
const INPUT_BORDER_RADIUS = 0.012 * height;
const INPUT_BORDER_COLOR = '#CDD1D0';
const INPUT_FONT_SIZE = 0.022 * height;
const INPUT_TEXT_COLOR = "#000E08";
const INPUT_BACKGROUND_COLOR = '#FFFFFF';

// General
const ICON_WIDTH = 0.6 * width;
const ICON_HEIGHT = 0.3 * height;
const TEXT_FONT_SIZE = 0.02 * height;
const TEXT_FONT_COLOR = "#B9C1BE";
const ERROR_COLOR = "#FF2D1B";
const ERROR_FONT_SIZE = 0.02 * height;
const BUTTON_HEIGHT = 0.06 * height;
const BUTTON_WIDTH = 0.85 * width;
const BUTTON_BORDER_RADIUS = 0.018 * height;
const BUTTON_FONT_SIZE = 0.02 * height;

const GlobalStyles = {
    SPLASH_BACKGROUND_COLOR,
    SPLASH_TITLE_FONT_SIZE,
    SPLASH_TITLE_COLOR,
    SPLASH_LOGO_WIDTH,
    SPLASH_LOGO_HEIGHT,
    ONBOARDING_PADDING_HORIZONTAL,
    ONBOARDING_TITLE_MARGIN,
    ONBOARDING_TITLE1_MARGIN,
    ONBOARDING_SPLASH_LOGO_HEIGHT,
    ONBOARDING_SPLASH_LOGO_WIDTH,
    ONBOARDING_CONTAINER_BUTTON_WIDTH,
    ONBOARDING_BACKGROUND_COLOR,
    ONBOARDING_TITLE_FONT_SIZE,
    ONBOARDING_TITLE1_FONT_SIZE,
    ONBOARDING_TITLE_LINE_HEIGHT,
    ONBOARDING_TITLE_COLOR,
    ONBOARDING_SUBTITLE_FONT_SIZE,
    ONBOARDING_SUBTITLE_MARGIN,
    ONBOARDING_SUBTITLE_COLOR,
    ONBOARDING_SOCIALBUTTON_MARGIN,
    ONBOARDING_SOCIALBUTTON_HW,
    ONBOARDING_SOCIALBUTTON_RADIUS,
    ONBOARDING_SOCIALICON_HW,
    ONBOARDING_LINE_MARGIN,
    ONBOARDING_BUTTON_TEXT_COLOR,
    ONBOARDING_OR_COLOR,
    ONBOARDING_OR_FONT_SIZE,
    ONBOARDING_RULER_COLOR,
    ONBOARDING_TEXT_FONT_SIZE,
    SIGNIN_BACKGROUND_COLOR,
    SIGNIN_TITLE_FONT_SIZE,
    SIGNIN_TITLE_COLOR,
    SIGNIN_OR_COLOR,
    SIGNIN_RULER_COLOR,
    SIGNIN_TEXT_COLOR,
    SIGNIN_BUTTON_COLOR,
    SIGNIN_BUTTON_TEXT_COLOR,
    SIGNIN1_BUTTON_COLOR,
    SIGNIN1_BUTTON_TEXT_COLOR,
    INPUT_HEIGHT,
    INPUT_WIDTH,
    INPUT_BORDER_RADIUS,
    INPUT_BORDER_COLOR,
    INPUT_FONT_SIZE,
    INPUT_TEXT_COLOR,
    INPUT_BACKGROUND_COLOR,
    ICON_WIDTH,
    ICON_HEIGHT,
    TEXT_FONT_SIZE,
    TEXT_FONT_COLOR,
    ERROR_COLOR,
    ERROR_FONT_SIZE,
    BUTTON_HEIGHT,
    BUTTON_WIDTH,
    BUTTON_BORDER_RADIUS,
    BUTTON_FONT_SIZE
};

export default GlobalStyles;