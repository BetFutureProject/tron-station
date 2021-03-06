import React from "react";

// styles
import { withStyles } from "@material-ui/core/styles";
import regularFormsStyle from "assets/jss/regularFormsStyle";

// components
import GridContainer from "components/common/GridContainer.jsx";
import GridItem from "components/common/GridItem.jsx";
import Card from "components/common/Card.jsx";
import CardHeader from "components/common/CardHeader.jsx";
import CardBody from "components/common/CardBody.jsx";
import CustomInput from "components/common/CustomInput.jsx";
import CustomButton from "components/common/CustomButton.jsx";

class UnitCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trxAmount: "",
      convertedSunAmount: "",
      sunAmount: "",
      convertedTrxAmount: ""
    };
  }

  handleInputChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  async calcSun() {
    let sun = parseFloat(parseFloat(this.state.trxAmount) * 1000000);
    this.setState({
      convertedSunAmount: Number(sun)
        .toFixed(20)
        .replace(/\.?0+$/, "")
    });
  }

  async calcTrx() {
    let trx = parseFloat(parseFloat(this.state.sunAmount) / 1000000);
    this.setState({
      convertedTrxAmount: trx
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="rose" icon>
              <h4 className={classes.cardIconTitle}>
                Calculate TRX to SUN &nbsp;&nbsp;
                <strong>1 TRX = 1,000,000 SUN</strong>
              </h4>
            </CardHeader>
            <CardBody>
              <form>
                <CustomInput
                  labelText="Please input TRX amount"
                  id="trx_amount"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "number",
                    defaultValue: this.state.trxAmount,
                    onChange: event =>
                      this.handleInputChange(event, "trxAmount")
                  }}
                />
                <CustomButton color="rose" onClick={event => this.calcSun()}>
                  Calculate
                </CustomButton>
              </form>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="rose" icon>
              <h4 className={classes.cardIconTitle}>SUN Amount</h4>
            </CardHeader>
            <CardBody>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      id="converted_sun"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        value:
                          isNaN(this.state.convertedSunAmount) ||
                          this.state.convertedSunAmount === ""
                            ? ""
                            : Number(
                                this.state.convertedSunAmount
                              ).toLocaleString(),
                        disabled: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </form>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="rose" icon>
              <h4 className={classes.cardIconTitle}>
                Calculate SUN to TRX &nbsp;&nbsp;
                <strong>1 SUN = 0.000001 TRX</strong>
              </h4>
            </CardHeader>
            <CardBody>
              <form>
                <CustomInput
                  labelText="Please input SUN amount"
                  id="sun_amount"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "number",
                    defaultValue: this.state.sunAmount,
                    onChange: event =>
                      this.handleInputChange(event, "sunAmount")
                  }}
                />
                <CustomButton color="rose" onClick={event => this.calcTrx()}>
                  Calculate
                </CustomButton>
              </form>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="rose" icon>
              <h4 className={classes.cardIconTitle}>TRX Amount</h4>
            </CardHeader>
            <CardBody>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      id="converted_trx"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        value:
                          isNaN(this.state.convertedTrxAmount) ||
                          this.state.convertedTrxAmount === ""
                            ? ""
                            : this.state.convertedTrxAmount < 1
                              ? this.state.convertedTrxAmount
                              : this.state.convertedTrxAmount.toLocaleString(),
                        disabled: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(regularFormsStyle)(UnitCalculator);
