#!/bin/bash
set -o errexit   # abort on nonzero exitstatus
set -o nounset   # abort on unbound variable
set -o pipefail  # don't hide errors within pipes

# not all js files are jsx but the ones that aren't shouldn't have styles inline
check_jsx() {
  local style_re='style[ ]*=[ ]*[{][^}]*[}]'
  local style_re_alt='style[ ]*=[ ]*"[^"]*"'
  find $@ -name "*.js" | xargs grep -o -e "$style_re" -e "$style_re_alt" | grep fontStyle | grep -v italic || echo "No non-italic fontStyles found"
  find $@ -name "*.js" | xargs grep -o -e "$style_re" -e "$style_re_alt" | grep fontFamily | grep -v "Source Sans Pro" || echo "No other fontFamilies found"
  find $@ -name "*.js" | xargs grep -o -e "$style_re" -e "$style_re_alt" | grep fontWeight | grep -v -e 400 -e 700 -e bold -e normal || echo "No other fontWeights found"
}

# note that the only css (vs scss) files are for font files 
check_scss() {
  find $@ -name "*.scss" | xargs grep -o "font-weight:[ ][^;\!]*" | grep -v -e " bold" -e 700 -e 400 -e " normal" -e "\$font-bold" -e "\$font-normal"
  find $@ -name "*.scss" | xargs grep -o "font-family:[ ][^;\!]*" | grep -v -e "font-sans" -e "sans-serif" -e "Source Sans Pro"
  find $@ -name "*.scss" | xargs grep -o "font-style:[ ][^;\!]*" | grep -v "italic" || echo "only italic for font-styles"
}

finish() {
  result=$?
  # Your cleanup code here
  exit ${result}
}
trap finish EXIT ERR

# main

echo "Checking JS(x) files for inline font styles"
check_jsx ols-ui/src odg-app/src
echo "Checking scss files for font styles related to family, weight, and style"
check_scss ols-ui/src odg-app/src


