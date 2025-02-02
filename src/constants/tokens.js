const backgroundColorProperties = ['background', 'background-color']
const borderColorProperties = ['border-color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color']
const textColorProperties = ['color']
const generalColorsProperties = [...backgroundColorProperties, ...borderColorProperties, ...textColorProperties]
const borderRadiusProperties = ['border-radius', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-end-end-radius', 'border-end-start-radius', 'border-start-end-radius', 'border-start-start-radius', 'border-top-left-radius', 'border-top-right-radius']
const borderWidthProperties = ['border', 'border-width']
const paddingProperties = ['padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'padding-block', 'padding-block-end', 'padding-block-start', 'padding-inline', 'padding-inline-end', 'padding-inline-start']
const marginProperties = ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'margin-block', 'margin-block-end', 'margin-block-start', 'margin-inline', 'margin-inline-end', 'margin-inline-start']
const spacementSizeProperties = [...paddingProperties, ...marginProperties]
const generalSizeProperties = ['width', 'min-width', 'max-width', 'height', 'min-height', 'max-height', 'font-size']

const tokens = {
    "--ids_color_action_primary_base": {value: "#FF6200", usage: generalColorsProperties},
    "--ids_color_action_primary_base_soft": {value: "rgba(255, 98, 0, .1)", usage: generalColorsProperties},
    "--ids_color_action_primary_base_medium": {value: "rgba(255, 98, 0, .5)", usage: generalColorsProperties},
    "--ids_color_action_primary_base_strong": {value: "rgba(255, 98, 0, .8)", usage: generalColorsProperties},
    "--ids_color_action_primary_variant": {value: "#E55800", usage: generalColorsProperties},
    "--ids_color_action_primary_variant_soft": {value: "rgba(229, 88, 0, .1)", usage: generalColorsProperties},
    "--ids_color_action_primary_variant_medium": {value: "rgba(229, 88, 0, .5)", usage: generalColorsProperties},
    "--ids_color_action_primary_variant_strong": {value: "rgba(229, 88, 0, .8)", usage: generalColorsProperties},
    "--ids_color_action_primary_contrast": {value: "#FFFFFF", usage: generalColorsProperties},
    "--ids_color_action_primary_contrast_soft": {value: "rgba(255, 255, 255, .1)", usage: generalColorsProperties},
    "--ids_color_action_primary_contrast_medium": {value: "rgba(255, 255, 255, .5)", usage: generalColorsProperties},
    "--ids_color_action_primary_contrast_strong": {value: "rgba(255, 255, 255, .8)", usage: generalColorsProperties},
    "--ids_color_action_secondary_base": {value: "#000066", usage: generalColorsProperties},
    "--ids_color_action_secondary_base_soft": {value: "rgba(0, 0, 102, .1)", usage: generalColorsProperties},
    "--ids_color_action_secondary_base_medium": {value: "rgba(0, 0, 102, .5)", usage: generalColorsProperties},
    "--ids_color_action_secondary_base_strong": {value: "rgba(0, 0, 102, .8)", usage: generalColorsProperties},
    "--ids_color_action_secondary_variant": {value: "#000D3C", usage: generalColorsProperties},
    "--ids_color_action_secondary_variant_soft": {value: "rgba(0, 13, 60, .1)", usage: generalColorsProperties},
    "--ids_color_action_secondary_variant_medium": {value: "rgba(0, 13, 60, .5)", usage: generalColorsProperties},
    "--ids_color_action_secondary_variant_strong": {value: "rgba(0, 13, 60, .8)", usage: generalColorsProperties},
    "--ids_color_action_secondary_contrast": {value: "#FFFFFF", usage: generalColorsProperties},
    "--ids_color_action_secondary_contrast_soft": {value: "rgba(255, 255, 255, .1)", usage: generalColorsProperties},
    "--ids_color_action_secondary_contrast_medium": {value: "rgba(255, 255, 255, .5)", usage: generalColorsProperties},
    "--ids_color_action_secondary_contrast_strong": {value: "rgba(255, 255, 255, .8)", usage: generalColorsProperties},
    "--ids_color_action_neutral_base": {value: "#3B3B3B", usage: generalColorsProperties},
    "--ids_color_action_neutral_base_soft": {value: "rgba(59, 59, 59, .1)", usage: generalColorsProperties},
    "--ids_color_action_neutral_base_medium": {value: "rgba(59, 59, 59, .5)", usage: generalColorsProperties},
    "--ids_color_action_neutral_base_strong": {value: "rgba(59, 59, 59, .8)", usage: generalColorsProperties},
    "--ids_color_action_neutral_variant": {value: "#000000", usage: generalColorsProperties},
    "--ids_color_action_neutral_variant_soft": {value: "rgba(0, 0, 0, .1)", usage: generalColorsProperties},
    "--ids_color_action_neutral_variant_medium": {value: "rgba(0, 0, 0, .5)", usage: generalColorsProperties},
    "--ids_color_action_neutral_variant_strong": {value: "rgba(0, 0, 0, .8)", usage: generalColorsProperties},
    "--ids_color_action_neutral_contrast": {value: "#FFFFFF", usage: generalColorsProperties},
    "--ids_color_action_neutral_contrast_soft": {value: "rgba(255, 255, 255, .1)", usage: generalColorsProperties},
    "--ids_color_action_neutral_contrast_medium": {value: "rgba(255, 255, 255, .5)", usage: generalColorsProperties},
    "--ids_color_action_neutral_contrast_strong": {value: "rgba(255, 255, 255, .8)", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_base": {value: "#E55800", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_base_soft": {value: "rgba(229, 88, 0, .1)", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_base_medium": {value: "rgba(229, 88, 0, .5)", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_base_strong": {value: "rgba(229, 88, 0, .8)", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_variant": {value: "#D75200", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_variant_soft": {value: "rgba(215, 82, 0, .1)", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_variant_medium": {value: "rgba(215, 82, 0, .5)", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_variant_strong": {value: "rgba(215, 82, 0, .8)", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_contrast": {value: "#FFFFFF", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_contrast_soft": {value: "rgba(255, 255, 255, .1)", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_contrast_medium": {value: "rgba(255, 255, 255, .5)", usage: generalColorsProperties},
    "--ids_color_action_neutral_onPrimary_contrast_strong": {value: "rgba(255, 255, 255, .8)", usage: generalColorsProperties},
    "--ids_color_action_disabled_base": {value: "#CFD1D3", usage: generalColorsProperties},
    "--ids_color_action_disabled_base_soft": {value: "rgba(207, 209, 211, .1)", usage: generalColorsProperties},
    "--ids_color_action_disabled_base_medium": {value: "rgba(207, 209, 211, .5)", usage: generalColorsProperties},
    "--ids_color_action_disabled_base_strong": {value: "rgba(207, 209, 211, .8)", usage: generalColorsProperties},
    "--ids_color_action_disabled_variant": {value: "#999999", usage: generalColorsProperties},
    "--ids_color_action_disabled_variant_soft": {value: "rgba(153, 153, 153, .1)", usage: generalColorsProperties},
    "--ids_color_action_disabled_variant_medium": {value: "rgba(153, 153, 153, .5)", usage: generalColorsProperties},
    "--ids_color_action_disabled_variant_strong": {value: "rgba(153, 153, 153, .8)", usage: generalColorsProperties},
    "--ids_color_text_heading_01": {value: "#000000", usage: textColorProperties},
    "--ids_color_text_heading_01_soft": {value: "rgba(0, 0, 0, .1)", usage: textColorProperties},
    "--ids_color_text_heading_01_medium": {value: "rgba(0, 0, 0, .5)", usage: textColorProperties},
    "--ids_color_text_heading_01_strong": {value: "rgba(0, 0, 0, .8)", usage: textColorProperties},
    "--ids_color_text_heading_02": {value: "#4C4C4C", usage: textColorProperties},
    "--ids_color_text_heading_02_soft": {value: "rgba(76, 76, 76, .1)", usage: textColorProperties},
    "--ids_color_text_heading_02_medium": {value: "rgba(76, 76, 76, .5)", usage: textColorProperties},
    "--ids_color_text_heading_02_strong": {value: "rgba(76, 76, 76, .8)", usage: textColorProperties},
    "--ids_color_text_body_01": {value: "#000000", usage: textColorProperties},
    "--ids_color_text_body_01_soft": {value: "rgba(0, 0, 0, .1)", usage: textColorProperties},
    "--ids_color_text_body_01_medium": {value: "rgba(0, 0, 0, .5)", usage: textColorProperties},
    "--ids_color_text_body_01_strong": {value: "rgba(0, 0, 0, .8)", usage: textColorProperties},
    "--ids_color_text_body_02": {value: "#4C4C4C", usage: textColorProperties},
    "--ids_color_text_body_02_soft": {value: "rgba(76, 76, 76, .1)", usage: textColorProperties},
    "--ids_color_text_body_02_medium": {value: "rgba(76, 76, 76, .5)", usage: textColorProperties},
    "--ids_color_text_body_02_strong": {value: "rgba(76, 76, 76, .8)", usage: textColorProperties},
    "--ids_color_text_highlight": {value: "#FF6200", usage: textColorProperties},
    "--ids_color_text_highlight_soft": {value: "rgba(255, 98, 0, .1)", usage: textColorProperties},
    "--ids_color_text_highlight_medium": {value: "rgba(255, 98, 0, .5)", usage: textColorProperties},
    "--ids_color_text_highlight_strong": {value: "rgba(255, 98, 0, .8)", usage: textColorProperties},
    "--ids_color_text_link_base": {value: "#000066", usage: textColorProperties},
    "--ids_color_text_link_base_soft": {value: "rgba(0, 0, 102, .1)", usage: textColorProperties},
    "--ids_color_text_link_base_medium": {value: "rgba(0, 0, 102, .5)", usage: textColorProperties},
    "--ids_color_text_link_base_strong": {value: "rgba(0, 0, 102, .8)", usage: textColorProperties},
    "--ids_color_text_link_variant": {value: "#000D3C", usage: textColorProperties},
    "--ids_color_text_link_variant_soft": {value: "rgba(0, 13, 60, .1)", usage: textColorProperties},
    "--ids_color_text_link_variant_medium": {value: "rgba(0, 13, 60, .5)", usage: textColorProperties},
    "--ids_color_text_link_variant_strong": {value: "rgba(0, 13, 60, .8)", usage: textColorProperties},
    "--ids_color_bg_base": {value: "#FFFFFF", usage: backgroundColorProperties},
    "--ids_color_bg_base_soft": {value: "rgba(255, 255, 255, .1)", usage: backgroundColorProperties},
    "--ids_color_bg_base_medium": {value: "rgba(255, 255, 255, .5)", usage: backgroundColorProperties},
    "--ids_color_bg_base_strong": {value: "rgba(255, 255, 255, .8)", usage: backgroundColorProperties},
    "--ids_color_bg_variant_01": {value: "#F1F2F4", usage: backgroundColorProperties},
    "--ids_color_bg_variant_01_soft": {value: "rgba(241, 242, 244, .1)", usage: backgroundColorProperties},
    "--ids_color_bg_variant_01_medium": {value: "rgba(241, 242, 244, .5)", usage: backgroundColorProperties},
    "--ids_color_bg_variant_01_strong": {value: "rgba(241, 242, 244, .8)", usage: backgroundColorProperties},
    "--ids_color_bg_variant_02": {value: "#E3E5E8", usage: backgroundColorProperties},
    "--ids_color_bg_variant_02_soft": {value: "rgba(227, 229, 232, .1)", usage: backgroundColorProperties},
    "--ids_color_bg_variant_02_medium": {value: "rgba(227, 229, 232, .5)", usage: backgroundColorProperties},
    "--ids_color_bg_variant_02_strong": {value: "rgba(227, 229, 232, .8)", usage: backgroundColorProperties},
    "--ids_color_bg_brand_primary": {value: "#FF6200", usage: backgroundColorProperties},
    "--ids_color_bg_brand_primary_soft": {value: "rgba(255, 98, 0, .1)", usage: backgroundColorProperties},
    "--ids_color_bg_brand_primary_medium": {value: "rgba(255, 98, 0, .5)", usage: backgroundColorProperties},
    "--ids_color_bg_brand_primary_strong": {value: "rgba(255, 98, 0, .8)", usage: backgroundColorProperties},
    "--ids_color_bg_brand_secondary": {value: "#000066", usage: backgroundColorProperties},
    "--ids_color_bg_brand_secondary_soft": {value: "rgba(0, 0, 102, .1)", usage: backgroundColorProperties},
    "--ids_color_bg_brand_secondary_medium": {value: "rgba(0, 0, 102, .5)", usage: backgroundColorProperties},
    "--ids_color_bg_brand_secondary_strong": {value: "rgba(0, 0, 102, .8)", usage: backgroundColorProperties},
    "--ids_color_bg_brand_gradient": {value: "linear-gradient(-225deg, rgb(255, 98, 0) 0%, rgb(255, 124, 0) 100%)", usage: backgroundColorProperties},
    "--ids_color_bg_shimmer_gradient": {value: "linear-gradient(90deg, rgb(241, 242, 244) 0%, rgb(153, 153, 153) 50%, rgb(241, 242, 244) 100%)", usage: backgroundColorProperties},
    "--ids_color_bg_shimmer_gradient_onLight": {value: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%)", usage: backgroundColorProperties},
    "--ids_color_bg_shimmer_gradient_onDark": {value: "linear-gradient(90deg, rgb(255, 98, 0) 0%, rgb(255, 255, 255) 50%, rgb(255, 98, 0) 100%)", usage: backgroundColorProperties},
    "--ids_color_border_soft": {value: "#CFD1D3", usage: borderColorProperties},
    "--ids_color_border_soft_soft": {value: "rgba(207, 209, 211, .1)", usage: borderColorProperties},
    "--ids_color_border_soft_medium": {value: "rgba(207, 209, 211, .5)", usage: borderColorProperties},
    "--ids_color_border_soft_strong": {value: "rgba(207, 209, 211, .8)", usage: borderColorProperties},
    "--ids_color_border_medium": {value: "#B3B3B3", usage: borderColorProperties},
    "--ids_color_border_medium_soft": {value: "rgba(179, 179, 179, .1)", usage: borderColorProperties},
    "--ids_color_border_medium_medium": {value: "rgba(179, 179, 179, .5)", usage: borderColorProperties},
    "--ids_color_border_medium_strong": {value: "rgba(179, 179, 179, .8)", usage: borderColorProperties},
    "--ids_color_border_strong": {value: "#686E7A", usage: borderColorProperties},
    "--ids_color_border_strong_soft": {value: "rgba(104, 110, 122, .1)", usage: borderColorProperties},
    "--ids_color_border_strong_medium": {value: "rgba(104, 110, 122, .5)", usage: borderColorProperties},
    "--ids_color_border_strong_strong": {value: "rgba(104, 110, 122, .8)", usage: borderColorProperties},
    "--ids_color_contrast_onLight": {value: "#000000", usage: generalColorsProperties},
    "--ids_color_contrast_onLight_soft": {value: "rgba(0, 0, 0, .1)", usage: generalColorsProperties},
    "--ids_color_contrast_onLight_medium": {value: "rgba(0, 0, 0, .5)", usage: generalColorsProperties},
    "--ids_color_contrast_onLight_strong": {value: "rgba(0, 0, 0, .8)", usage: generalColorsProperties},
    "--ids_color_contrast_onDark": {value: "#FFFFFF", usage: generalColorsProperties},
    "--ids_color_contrast_onDark_soft": {value: "rgba(255, 255, 255, .1)", usage: generalColorsProperties},
    "--ids_color_contrast_onDark_medium": {value: "rgba(255, 255, 255, .5)", usage: generalColorsProperties},
    "--ids_color_contrast_onDark_strong": {value: "rgba(255, 255, 255, .8)", usage: generalColorsProperties},
    "--ids_color_contrast_onBrand_primary": {value: "#FFFFFF", usage: generalColorsProperties},
    "--ids_color_contrast_onBrand_primary_soft": {value: "rgba(255, 255, 255, .1)", usage: generalColorsProperties},
    "--ids_color_contrast_onBrand_primary_medium": {value: "rgba(255, 255, 255, .5)", usage: generalColorsProperties},
    "--ids_color_contrast_onBrand_primary_strong": {value: "rgba(255, 255, 255, .8)", usage: generalColorsProperties},
    "--ids_color_contrast_onBrand_secondary": {value: "#FFFFFF", usage: generalColorsProperties},
    "--ids_color_contrast_onBrand_secondary_soft": {value: "rgba(255, 255, 255, .1)", usage: generalColorsProperties},
    "--ids_color_contrast_onBrand_secondary_medium": {value: "rgba(255, 255, 255, .5)", usage: generalColorsProperties},
    "--ids_color_contrast_onBrand_secondary_strong": {value: "rgba(255, 255, 255, .8)", usage: generalColorsProperties},
    "--ids_color_feedback_information": {value: "#001FBD", usage: generalColorsProperties},
    "--ids_color_feedback_information_soft": {value: "rgba(0, 31, 189, .1)", usage: generalColorsProperties},
    "--ids_color_feedback_information_medium": {value: "rgba(0, 31, 189, .5)", usage: generalColorsProperties},
    "--ids_color_feedback_information_strong": {value: "rgba(0, 31, 189, .8)", usage: generalColorsProperties},
    "--ids_color_feedback_information_contrast": {value: "#FFFFFF", usage: generalColorsProperties},
    "--ids_color_feedback_information_contrast_soft": {value: "rgba(255, 255, 255, .1)", usage: generalColorsProperties},
    "--ids_color_feedback_information_contrast_medium": {value: "rgba(255, 255, 255, .5)", usage: generalColorsProperties},
    "--ids_color_feedback_information_contrast_strong": {value: "rgba(255, 255, 255, .8)", usage: generalColorsProperties},
    "--ids_color_feedback_success": {value: "#006611", usage: generalColorsProperties},
    "--ids_color_feedback_success_soft": {value: "rgba(0, 102, 17, .1)", usage: generalColorsProperties},
    "--ids_color_feedback_success_medium": {value: "rgba(0, 102, 17, .5)", usage: generalColorsProperties},
    "--ids_color_feedback_success_strong": {value: "rgba(0, 102, 17, .8)", usage: generalColorsProperties},
    "--ids_color_feedback_success_contrast": {value: "#FFFFFF", usage: generalColorsProperties},
    "--ids_color_feedback_success_contrast_soft": {value: "rgba(255, 255, 255, .1)", usage: generalColorsProperties},
    "--ids_color_feedback_success_contrast_medium": {value: "rgba(255, 255, 255, .5)", usage: generalColorsProperties},
    "--ids_color_feedback_success_contrast_strong": {value: "rgba(255, 255, 255, .8)", usage: generalColorsProperties},
    "--ids_color_feedback_error": {value: "#B50202", usage: generalColorsProperties},
    "--ids_color_feedback_error_soft": {value: "rgba(181, 2, 2, .1)", usage: generalColorsProperties},
    "--ids_color_feedback_error_medium": {value: "rgba(181, 2, 2, .5)", usage: generalColorsProperties},
    "--ids_color_feedback_error_strong": {value: "rgba(181, 2, 2, .8)", usage: generalColorsProperties},
    "--ids_color_feedback_error_contrast": {value: "#FFFFFF", usage: generalColorsProperties},
    "--ids_color_feedback_error_contrast_soft": {value: "rgba(255, 255, 255, .1)", usage: generalColorsProperties},
    "--ids_color_feedback_error_contrast_medium": {value: "rgba(255, 255, 255, .5)", usage: generalColorsProperties},
    "--ids_color_feedback_error_contrast_strong": {value: "rgba(255, 255, 255, .8)", usage: generalColorsProperties},
    "--ids_color_feedback_alert": {value: "#FFCD00", usage: generalColorsProperties},
    "--ids_color_feedback_alert_soft": {value: "rgba(255, 205, 0, .1)", usage: generalColorsProperties},
    "--ids_color_feedback_alert_medium": {value: "rgba(255, 205, 0, .5)", usage: generalColorsProperties},
    "--ids_color_feedback_alert_strong": {value: "rgba(255, 205, 0, .8)", usage: generalColorsProperties},
    "--ids_color_feedback_alert_contrast": {value: "#000000", usage: generalColorsProperties},
    "--ids_color_feedback_alert_contrast_soft": {value: "rgba(0, 0, 0, .1)", usage: generalColorsProperties},
    "--ids_color_feedback_alert_contrast_medium": {value: "rgba(0, 0, 0, .5)", usage: generalColorsProperties},
    "--ids_color_feedback_alert_contrast_strong": {value: "rgba(0, 0, 0, .8)", usage: generalColorsProperties},
    "--ids_color_feedback_neutral": {value: "#4C4C4C", usage: generalColorsProperties},
    "--ids_color_feedback_neutral_soft": {value: "rgba(76, 76, 76, .1)", usage: generalColorsProperties},
    "--ids_color_feedback_neutral_medium": {value: "rgba(76, 76, 76, .5)", usage: generalColorsProperties},
    "--ids_color_feedback_neutral_strong": {value: "rgba(76, 76, 76, .8)", usage: generalColorsProperties},
    "--ids_color_feedback_neutral_contrast": {value: "#FFFFFF", usage: generalColorsProperties},
    "--ids_color_feedback_neutral_contrast_soft": {value: "rgba(255, 255, 255, .1)", usage: generalColorsProperties},
    "--ids_color_feedback_neutral_contrast_medium": {value: "rgba(255, 255, 255, .5)", usage: generalColorsProperties},
    "--ids_color_feedback_neutral_contrast_strong": {value: "rgba(255, 255, 255, .8)", usage: generalColorsProperties},
    "--ids_color_chart_01": {value: "#FF6200", usage: backgroundColorProperties},
    "--ids_color_chart_02": {value: "#00036B", usage: backgroundColorProperties},
    "--ids_color_chart_03": {value: "#6E6E6E", usage: backgroundColorProperties},
    "--ids_color_chart_04": {value: "#1940FF", usage: backgroundColorProperties},
    "--ids_color_chart_05": {value: "#FFBA00", usage: backgroundColorProperties},
    "--ids_color_chart_06": {value: "#999999", usage: backgroundColorProperties},
    "--ids_color_chart_07": {value: "#B81D8D", usage: backgroundColorProperties},
    "--ids_color_chart_08": {value: "#008717", usage: backgroundColorProperties},
    "--ids_motion_time_fast_01": {value: ".1s", usage: ['animation', 'animation-duration']},
    "--ids_motion_time_fast_02": {value: ".15s", usage: ['animation', 'animation-duration']},
    "--ids_motion_time_fast_03": {value: ".2s", usage: ['animation', 'animation-duration']},
    "--ids_motion_time_moderate_01": {value: ".25s", usage: ['animation', 'animation-duration']},
    "--ids_motion_time_moderate_02": {value: ".3s", usage: ['animation', 'animation-duration']},
    "--ids_motion_time_moderate_03": {value: ".35s", usage: ['animation', 'animation-duration']},
    "--ids_motion_time_slow_01": {value: ".4s", usage: ['animation', 'animation-duration']},
    "--ids_motion_time_slow_02": {value: ".45s", usage: ['animation', 'animation-duration']},
    "--ids_motion_time_slow_03": {value: ".5s", usage: ['animation', 'animation-duration']},
    "--ids_motion_time_superslow_01": {value: ".6s", usage: ['animation', 'animation-duration']},
    "--ids_motion_time_superslow_02": {value: ".7s", usage: ['animation', 'animation-duration']},
    "--ids_motion_time_superslow_03": {value: ".8s", usage: ['animation', 'animation-duration']},
    "--ids_motion_delay_fast_01": {value: "50ms", usage: ['animation-delay']},
    "--ids_motion_delay_fast_02": {value: ".1s", usage: ['animation-delay']},
    "--ids_motion_delay_moderate_01": {value: ".15s", usage: ['animation-delay']},
    "--ids_motion_delay_moderate_02": {value: ".2s", usage: ['animation-delay']},
    "--ids_motion_delay_moderate_03": {value: ".25s", usage: ['animation-delay']},
    "--ids_motion_delay_moderate_04": {value: ".5s", usage: ['animation-delay']},
    "--ids_motion_delay_slow_01": {value: "1s", usage: ['animation-delay']},
    "--ids_motion_easing_effective_linear": {value: "cubic-bezier(1,1,1,1)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_effective_standard": {value: "cubic-bezier(.4, 0, .6, 1)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_effective_01": {value: "cubic-bezier(.75, 0, .45, 1)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_effective_02": {value: "cubic-bezier(.66, 0, .34, 1)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_effective_accelerate_standard": {value: "cubic-bezier(1, 0, .83, .83)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_effective_accelerate_01": {value: "cubic-bezier(.64, 0, .83, .83)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_effective_accelerate_02": {value: "cubic-bezier(.39, 0, .7, .15)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_effective_decelerate_standard": {value: "cubic-bezier(.33, 0, 0, 1)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_effective_decelerate_01": {value: "cubic-bezier(.25, .46, .45, .94)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_effective_decelerate_02": {value: "cubic-bezier(.19, 1, .22, 1)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_vivid_standard": {value: "cubic-bezier(.6, 0, .2, 1)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_vivid_01": {value: "cubic-bezier(.45, 0, .09, 1)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_vivid_accelerate_on": {value: "cubic-bezier(.64, 0, .78, 0)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_vivid_accelerate_back": {value: "cubic-bezier(.32, 0, .46, -.71)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_vivid_decelerate_on": {value: "cubic-bezier(.22, 1, .36, 1)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_easing_vivid_decelerate_back": {value: "cubic-bezier(.2, 1.51, .5, 1.06)", usage: ['animation', 'animation-timing-function']},
    "--ids_motion_opacity_0": {value: "0", usage: ['opacity']},
    "--ids_motion_opacity_100": {value: "100", usage: ['opacity']},
    "--ids_motion_scale_0": {value: "0", usage: []},
    "--ids_motion_scale_100": {value: "100", usage: []},
    "--ids_motion_repeat_none": {value: "0", usage: ['animation', 'animation-iteration-count']},
    "--ids_motion_repeat_1x": {value: "1", usage: ['animation', 'animation-iteration-count']},
    "--ids_motion_repeat_2x": {value: "2", usage: ['animation', 'animation-iteration-count']},
    "--ids_motion_repeat_3x": {value: "3", usage: ['animation', 'animation-iteration-count']},
    "--ids_motion_repeat_loop": {value: "infinite", usage: ['animation', 'animation-iteration-count']},
    "--ids_opacity_empty": {value: "0", usage: ['opacity']},
    "--ids_opacity_soft": {value: ".1", usage: ['opacity']},
    "--ids_opacity_medium": {value: ".5", usage: ['opacity']},
    "--ids_opacity_strong": {value: ".8", usage: ['opacity']},
    "--ids_opacity_none": {value: "1", usage: ['opacity']},
    "--ids_size_cornerRadius_button": {value: ".75rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_smallButton": {value: ".5rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_tags_01": {value: ".25rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_tags_02": {value: ".5rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_fab": {value: ".75rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_tooltip": {value: ".25rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_card_01": {value: "1rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_card_02": {value: ".75rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_layout_01": {value: "1rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_layout_02": {value: "1.5rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_passwordCode": {value: ".5rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_snackbar": {value: ".25rem", usage: borderRadiusProperties},
    "--ids_size_cornerRadius_table": {value: ".25rem", usage: borderRadiusProperties},
    "--ids_size_border_small": {value: ".0625rem", usage: borderWidthProperties},
    "--ids_size_border_medium": {value: ".125rem", usage: borderWidthProperties},
    "--ids_size_border_large": {value: ".25rem", usage: borderWidthProperties},
    "--ids_size_padding_passwordCode_topDown": {value: ".5rem", usage: paddingProperties},
    "--ids_size_padding_passwordCode_leftRight": {value: ".5rem", usage: paddingProperties},
    "--ids_size_general_1x": {value: ".0625rem", usage: generalSizeProperties},
    "--ids_size_general_2x": {value: ".125rem", usage: generalSizeProperties},
    "--ids_size_general_3x": {value: ".1875rem", usage: generalSizeProperties},
    "--ids_size_general_4x": {value: ".25rem", usage: generalSizeProperties},
    "--ids_size5_general_5x": {value: ".3125rem", usage: generalSizeProperties},
    "--ids_size_general_6x": {value: ".375rem", usage: generalSizeProperties},
    "--ids_size_general_7x": {value: ".4375rem", usage: generalSizeProperties},
    "--ids_size_general_8x": {value: ".5rem", usage: generalSizeProperties},
    "--ids_size_general_10x": {value: ".625rem", usage: generalSizeProperties},
    "--ids_size_general_12x": {value: ".75rem", usage: generalSizeProperties},
    "--ids_size_general_14x": {value: ".875rem", usage: generalSizeProperties},
    "--ids_size_general_16x": {value: "1rem", usage: generalSizeProperties},
    "--ids_size_general_18x": {value: "1.125rem", usage: generalSizeProperties},
    "--ids_size_general_20x": {value: "1.25rem", usage: generalSizeProperties},
    "--ids_size_general_22x": {value: "1.375rem", usage: generalSizeProperties},
    "--ids_size_general_24x": {value: "1.5rem", usage: generalSizeProperties},
    "--ids_size_general_28x": {value: "1.75rem", usage: generalSizeProperties},
    "--ids_size_general_30x": {value: "1.875rem", usage: generalSizeProperties},
    "--ids_size_general_32x": {value: "2rem", usage: generalSizeProperties},
    "--ids_size_general_36x": {value: "2.25rem", usage: generalSizeProperties},
    "--ids_size_general_40x": {value: "2.5rem", usage: generalSizeProperties},
    "--ids_size_general_44x": {value: "2.75rem", usage: generalSizeProperties},
    "--ids_size_general_48x": {value: "3rem", usage: generalSizeProperties},
    "--ids_size_general_52x": {value: "3.25rem", usage: generalSizeProperties},
    "--ids_size_general_56x": {value: "3.5rem", usage: generalSizeProperties},
    "--ids_size_general_60x": {value: "3.75rem", usage: generalSizeProperties},
    "--ids_size_general_64x": {value: "4rem", usage: generalSizeProperties},
    "--ids_size_general_68x": {value: "4.25rem", usage: generalSizeProperties},
    "--ids_size_general_72x": {value: "4.5rem", usage: generalSizeProperties},
    "--ids_size_general_76x": {value: "4.75rem", usage: generalSizeProperties},
    "--ids_size_general_80x": {value: "5rem", usage: generalSizeProperties},
    "--ids_size_general_84x": {value: "5.25rem", usage: generalSizeProperties},
    "--ids_size_general_88x": {value: "5.5rem", usage: generalSizeProperties},
    "--ids_size_general_92x": {value: "5.75rem", usage: generalSizeProperties},
    "--ids_size_general_96x": {value: "6rem", usage: generalSizeProperties},
    "--ids_size_general_100x": {value: "6.25rem", usage: generalSizeProperties},
    "--ids_size_general_104x": {value: "6.5rem", usage: generalSizeProperties},
    "--ids_size_general_108x": {value: "6.75rem", usage: generalSizeProperties},
    "--ids_size_general_112x": {value: "7rem", usage: generalSizeProperties},
    "--ids_size_general_116x": {value: "7.25rem", usage: generalSizeProperties},
    "--ids_size_general_120x": {value: "7.5rem", usage: generalSizeProperties},
    "--ids_size_general_124x": {value: "7.75rem", usage: generalSizeProperties},
    "--ids_size_general_128x": {value: "8rem", usage: generalSizeProperties},
    "--ids_size_general_132x": {value: "8.25rem", usage: generalSizeProperties},
    "--ids_size_general_136x": {value: "8.5rem", usage: generalSizeProperties},
    "--ids_size_general_140x": {value: "8.75rem", usage: generalSizeProperties},
    "--ids_spacing_1x": {value: ".25rem", usage: spacementSizeProperties},
    "--ids_spacing_2x": {value: ".5rem", usage: spacementSizeProperties},
    "--ids_spacing_3x": {value: ".75rem", usage: spacementSizeProperties},
    "--ids_spacing_4x": {value: "1rem", usage: spacementSizeProperties},
    "--ids_spacing_5x": {value: "1.25rem", usage: spacementSizeProperties},
    "--ids_spacing_6x": {value: "1.5rem", usage: spacementSizeProperties},
    "--ids_spacing_8x": {value: "2rem", usage: spacementSizeProperties},
    "--ids_spacing_10x": {value: "2.5rem", usage: spacementSizeProperties},
    "--ids_spacing_12x": {value: "3rem", usage: spacementSizeProperties},
    "--ids_spacing_14x": {value: "3.5rem", usage: spacementSizeProperties},
    "--ids_textStyle_f01_s16_h24_wbd": {value: "700 1rem/1.5rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f01_s20_h28_wrg": {value: "700 1.25rem/1.75rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f01_s24_h32_wbd": {value: "700 1.5rem/2rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f01_s24_h32_wrg": {value: "700 1.5rem/2rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f01_s32_h48_wbd": {value: "700 2rem/3rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f01_s32_h48_wrg": {value: "700 2rem/3rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f01_s40_h64_wbd": {value: "700 2.5rem/4rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f01_s40_h64_wrg": {value: "700 2.5rem/4rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f01_s48_h80_wbd": {value: "700 3rem/5rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f01_s48_h80_wrg": {value: "700 3rem/5rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f01_s64_h100_wbd": {value: "700 4rem/6.25rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f01_s64_h100_wrg": {value: "700 4rem/6.25rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_f02_s12_h18_wbd": {value: "700 .75rem/1.125rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s12_h18_wrg": {value: "400 .75rem/1.125rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s14_h20_wbd": {value: "700 .875rem/1.25rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s14_h20_wrg": {value: "400 .875rem/1.25rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s16_h24_wbd": {value: "700 1rem/1.5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s16_h24_wrg": {value: "400 1rem/1.5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s18_h26_wbd": {value: "700 1.125rem/1.625rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s18_h26_wrg": {value: "400 1.125rem/1.625rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s20_h26_wbd": {value: "700 1.25rem/1.625rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s20_h26_wrg": {value: "400 1.25rem/1.625rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s24_h32_wbd": {value: "700 1.5rem/2rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s24_h32_wrg": {value: "400 1.5rem/2rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s32_h48_wrg": {value: "400 2rem/3rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s40_h64_wrg": {value: "400 2.5rem/4rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_f02_s48_h80_wrg": {value: "400 3rem/5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_title_01_base": {value: "700 1.5rem/2rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_title_01_variant": {value: "400 1.5rem/2rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_section_01": {value: "400 1.25rem/1.625rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_section_02": {value: "700 1rem/1.5rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_overline": {value: "400 1rem/1.5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_subtitle_01": {value: "400 1rem/1.5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_insight_regular": {value: "400 1.5rem/2rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_insight_bold": {value: "700 1.5rem/2rem 'Itau Display'", usage: ['font']},
    "--ids_textStyle_body_01_regular": {value: "400 1rem/1.5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_body_01_bold": {value: "700 1rem/1.5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_body_02_regular": {value: "400 .875rem/1.25rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_body_02_bold": {value: "700 .875rem/1.25rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_body_link_01_regular": {value: "400 1rem/1.5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_body_link_01_bold": {value: "700 1rem/1.5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_body_link_01_xbold": {value: "900 1rem/1.5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_body_link_02_regular": {value: "400 .875rem/1.25rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_body_link_02_bold": {value: "700 .875rem/1.25rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_body_link_02_xbold": {value: "900 .875rem/1.25rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_caption_regular": {value: "400 .75rem/1.125rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_caption_bold": {value: "700 .75rem/1.125rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_caption_link_regular": {value: "400 .75rem/1.125rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_caption_link_bold": {value: "700 .75rem/1.125rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_caption_link_xbold": {value: "900 .75rem/1.125rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_label_xsmall_regular": {value: "400 .75rem/1.125rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_label_xsmall_bold": {value: "700 .75rem/1.125rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_label_small_regular": {value: "400 .875rem/1.25rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_label_small_bold": {value: "700 .875rem/1.25rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_label_medium_regular": {value: "400 1rem/1.5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_label_medium_bold": {value: "700 1rem/1.5rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_label_large_regular": {value: "400 1.25rem/1.625rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_label_large_bold": {value: "700 1.25rem/1.625rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_label_xlarge_regular": {value: "400 1.5rem/2rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_label_xlarge_bold": {value: "700 1.5rem/2rem 'Itau Text'", usage: ['font']},
    "--ids_textStyle_icon_small": {value: "1rem/1rem 'Itau Icon'", usage: ['font']},
    "--ids_textStyle_icon_medium": {value: "1.5rem/1.5rem 'Itau Icon'", usage: ['font']},
    "--ids_textStyle_icon_large": {value: "2rem/2rem 'Itau Icon'", usage: ['font']},
    "--ids_textStyle_icon_xLarge": {value: "3rem/3rem 'Itau Icon'", usage: ['font']},
}

module.exports = tokens