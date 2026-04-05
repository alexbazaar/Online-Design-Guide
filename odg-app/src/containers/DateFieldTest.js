import React from "react";
import { withRouter } from "react-router";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { FlexContainer, FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";

import MainContentTemplate from "../components/MainContentTemplate";

import styles from "../styles/App.scss";
import DateField from "../../../ols-ui/src/components/DateField";
import DateFieldRange from "../../../ols-ui/src/components/DateFieldRange";
import DateFieldIcon from '../assets/images/spacing-specs/Form_Elements_Date_Field_Icon.png';
import DateFieldWithoutIcon from '../assets/images/spacing-specs/Form_Elements_Date_Field_Without_Icon.png';
import DateFieldIconDesktop from '../assets/images/spacing-specs/Form_Elements_Date_Range_Icon_Desktop.png';
import DateFieldIconMobile from '../assets/images/spacing-specs/Form_Elements_Date_Range_Icon_Mobile.png';
import DateFieldWithoutIconDesktop from '../assets/images/spacing-specs/Form_Elements_Date_Range_Without_Icon_Desktop.png';
import DateFieldWithoutIconMobile from '../assets/images/spacing-specs/Form_Elements_Date_Range_Without_Icon_Mobile.png';

import CalendarPickerDesktop1 from '../assets/images/spacing-specs/Form_Elements_Calendar_Picker_Desktop_01.png';
import CalendarPickerDesktop2 from '../assets/images/spacing-specs/Form_Elements_Calendar_Picker_Desktop_01v2.png';
import CalendarPickerMobile1 from '../assets/images/spacing-specs/Form_Elements_Calendar_Picker_Mobile_01.png';
import CalendarPickerMobile2 from '../assets/images/spacing-specs/Form_Elements_Calendar_Picker_Desktop_01.png';

/**
 * [Date Field Test description]
 * @constructor
 */
function DateFieldTest() {
  return (
    <MainContentTemplate  id="main-content" hasFullWidthStyle>
      <div className={styles.defaultPage}>
        <FlexContainer>
          <FlexRow justify="center">
            <div style={{ width: '455px' }}>
              <DateField
                id="vis1"
                placeholder={"MM/DD/YYYY"}
              />
              <DateField
                label="Date"
                id="vis2"
                placeholder={"MM/DD/YYYY"}
                required
              />
              <DateFieldRange
                id="vis3"
                toPlaceholder={"MM/DD/YYYY"}
                fromPlaceholder={"MM/DD/YYYY"}
              />
            </div>
          </FlexRow>
        </FlexContainer>
      </div>
    </MainContentTemplate>
  );
}

export default withRouter(EmbedStyles(styles)(DateFieldTest));
