import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import randomColor from 'randomcolor';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, TextField, Container, Checkbox, FormControlLabel } from '@material-ui/core';
import { SketchPicker } from 'react-color';
import { EvolveLogo, EvolveBorder } from './Logos';
import Footer from './Footer';

export default function Gen() {
  const [name, setName] = useState("bay");
  const [fontSize, setFontSize] = useState(60);
  const [logoFilterColor, setLogoFilterColor] = useState("#FFFFFF");
  const [logoGradientColorA, setLogoGradientColorA] = useState({a: 1, b: 255, g: 0, r: 255});
  const [logoGradientColorB, setLogoGradientColorB] = useState({a: 1, b: 255, g: 255, r: 0});
  const [logoStripeGradientColorA, setLogoStripeGradientColorA] = useState({a: 1, b: 255, g: 0, r: 255});
  const [logoStripeGradientColorB, setLogoStripeGradientColorB] = useState({a: 1, b: 255, g: 255, r: 0});
  const [logoBorderGradientColorA, setLogoBorderGradientColorA] = useState({a: 1, b: 255, g: 255, r: 0});
  const [logoBorderGradientColorB, setLogoBorderGradientColorB] = useState({a: 1, b: 255, g: 0, r: 255});
  const [logoStripeColor, setLogoStripeColor] = useState("#FF0000");
  const [textColor, setTextColor] = useState({a: 1, b: 255, g: 255, r: 255});
  const [borderColor, setBorderColor] = useState("#FF0000");
  const [useGradientForLogo, setUseGradientForLogo] = useState(false);
  const [useGradientForLogoStripe, setUseGradientForLogoStripe] = useState(false);
  const [useGradientForBorder, setUseGradientForBorder] = useState(false);
  const [useRectBorder, setUseRectBorder] = useState(false);
  const [useCircleBorder, setUseCircleBorder] = useState(true);

  const dynamicStyles = makeStyles(theme => ({
    resultWrapper: {
      flexGrow: 1,
      width: '500px',
      height: '500px',
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/backgrounds/1.png)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    },
    logoWrapper: {
      backgroundSize: 'contain',
      margin: '0 auto',
      width: '500px',
      height: '500px',
    },
    logo: {
      margin: '0 auto',
      width: '333px',
      height: '258px',
      position: 'relative'
    },
    logoBorder: {
      width: '500px',
      height: '500px',
      position: 'absolute',
    },
    logoItems: {
      position: 'relative'
    },
    textWrapper: {
      color: `rgba(${textColor.r}, ${textColor.g}, ${textColor.b}, ${textColor.a})`,
      fontSize: `${fontSize}px`,
      fontFamily: 'SFProDisplay-BlackItalic',
    }
  }))()

  const handleNameChange = event => setName(event.target.value);
  const handleFontSizeChange = event => setFontSize(event.target.value);
  const handleLogoFilterColorChange = (color) => setLogoFilterColor(color.hex);
  const handleLogoGradientAColorChange = (color) => setLogoGradientColorA(color.rgb);
  const handleLogoGradientBColorChange = (color) => setLogoGradientColorB(color.rgb);
  const handleLogoStripeColorChange = (color) => setLogoStripeColor(color.hex);
  const handleTextColorChange = (color) => setTextColor(color.rgb);
  const handleBorderColorChange = (color) => setBorderColor(color.hex);
  const handleChangeUseGradientForLogo = event => setUseGradientForLogo(event.target.checked);
  const handleChangeUseGradientForLogoStripe = event => setUseGradientForLogoStripe(event.target.checked);
  const handleChangeUseGradientForBorder = event => setUseGradientForBorder(event.target.checked);
  const handleLogoStripeGradientAColorChange = (color) => setLogoStripeGradientColorA(color.rgb);
  const handleLogoStripeGradientBColorChange = (color) => setLogoStripeGradientColorB(color.rgb);
  const handleLogoBorderGradientAColorChange = (color) => setLogoBorderGradientColorA(color.rgb);
  const handleLogoBorderGradientBColorChange = (color) => setLogoBorderGradientColorB(color.rgb);
  const handleChangeUseCircleForBorder = event => setUseCircleBorder(event.target.checked);
  const handleChangeUseRectForBorder = event => setUseRectBorder(event.target.checked);

  const handleSave = () => {
    //https://github.com/niklasvh/html2canvas/issues/1438
    //Scroll to top so that the canvas can capture the element
    window.scrollTo(0,0);
    document.documentElement.classList.add("hide-scrollbar");
    html2canvas(document.querySelector("#resultImg"), {useCORS : true}).then(canvas => {
      saveAs(canvas.toDataURL(), `${name}-ev0lve-avatar.png`)
      //document.body.appendChild(canvas);
    });
    document.documentElement.classList.remove("hide-scrollbar");
  }

  const saveAs = (uri, filename) => {
    let link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
  }

  const handleRandomMode = () => {
    setLogoFilterColor(randomColor());
    const logoGradientColorA = randomColor({format: 'rgbArray'});
    setLogoGradientColorA({a: 1, b: logoGradientColorA[2], g: logoGradientColorA[1], r: logoGradientColorA[0]});
    const logoGradientColorB = randomColor({format: 'rgbArray'});
    setLogoGradientColorB({a: 1, b: logoGradientColorB[2], g: logoGradientColorB[1], r: logoGradientColorB[0]});
    setLogoStripeColor(randomColor());
    const textColor = randomColor({format: 'rgbArray'});
    setTextColor({a: 1, b: textColor[2], g: textColor[1], r: textColor[0]});
    setBorderColor(randomColor());
    setUseGradientForLogo(Math.random() >= 0.5);
    setUseGradientForLogoStripe(Math.random() >= 0.5);
    setUseGradientForBorder(Math.random() >= 0.5);
    const logoGradientStripeColorA = randomColor({format: 'rgbArray'});
    setLogoStripeGradientColorA({a: 1, b: logoGradientStripeColorA[2], g: logoGradientStripeColorA[1], r: logoGradientStripeColorA[0]});
    const logoGradientStripeColorB = randomColor({format: 'rgbArray'});
    setLogoStripeGradientColorB({a: 1, b: logoGradientStripeColorB[2], g: logoGradientStripeColorB[1], r: logoGradientStripeColorB[0]});
    const logoGradientBorderColorA = randomColor({format: 'rgbArray'});
    setLogoBorderGradientColorA({a: 1, b: logoGradientBorderColorA[2], g: logoGradientBorderColorA[1], r: logoGradientBorderColorA[0]});
    const logoGradientBorderColorB = randomColor({format: 'rgbArray'});
    setLogoBorderGradientColorB({a: 1, b: logoGradientBorderColorB[2], g: logoGradientBorderColorB[1], r: logoGradientBorderColorB[0]});
    const handleBorderShape = Math.random() >= 0.5; 
    setUseCircleBorder(handleBorderShape);
    setUseRectBorder(!handleBorderShape);
  }

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Grid container direction="column" spacing={4} justify="center" alignItems="center">
          <Grid item>
            <Grid container className={dynamicStyles.resultWrapper}  id="resultImg" justify="center" alignItems="center" direction="column">
              <Grid container direction="column" justify="center" alignItems="center" item className={dynamicStyles.logoWrapper}>
                <Grid item className={dynamicStyles.logo}>
                  <EvolveLogo 
                    className={dynamicStyles.logoItems}
                    useGradientForLogo={useGradientForLogo}
                    useGradientForLogoStripe={useGradientForLogoStripe}
                    logoGradientColorA={logoGradientColorA}
                    logoGradientColorB={logoGradientColorB}
                    logoStripeGradientColorA={logoStripeGradientColorA}
                    logoStripeGradientColorB={logoStripeGradientColorB}
                    logoFill={logoFilterColor}
                    stripeFill={logoStripeColor}
                  />
                </Grid>
                <Grid item><Typography className={`${dynamicStyles.textWrapper}`}>{name}</Typography></Grid>
                <Grid item className={dynamicStyles.logoBorder}>
                  <EvolveBorder
                    useGradientForBorder={useGradientForBorder}
                    borderColor={borderColor}
                    logoBorderGradientColorA={logoBorderGradientColorA}
                    logoBorderGradientColorB={logoBorderGradientColorB}
                    useRect={useRectBorder}
                    useCircle={useCircleBorder}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item id="controls" justify="center" alignItems="center" spacing={2} container direction="column">
            <Grid item justify="center" alignItems="center" container spacing={2}>
              <Grid item><Button variant="outlined" onClick={handleSave}>Save</Button></Grid>
              <Grid item><Button variant="outlined" onClick={handleRandomMode}>Random</Button></Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item>
                <TextField id="outlined-name" label="Name" variant="outlined" value={name} onChange={handleNameChange} />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-name"
                  label="Font Size"
                  variant="outlined"
                  value={fontSize}
                  onChange={handleFontSizeChange}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={useGradientForLogo}
                      onChange={handleChangeUseGradientForLogo}
                      color="primary"
                    />
                  }
                  label="Use Gradient for Logo"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={useGradientForLogoStripe}
                      onChange={handleChangeUseGradientForLogoStripe}
                      color="primary"
                    />
                  }
                  label="Use Gradient for Stripe"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={useGradientForBorder}
                      onChange={handleChangeUseGradientForBorder}
                      color="primary"
                    />
                  }
                  label="Use Gradient for Border"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={useCircleBorder}
                      onChange={handleChangeUseCircleForBorder}
                      color="primary"
                    />
                  }
                  label="Border Circle"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={useRectBorder}
                      onChange={handleChangeUseRectForBorder}
                      color="primary"
                    />
                  }
                  label="Border Rect"
                />
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" spacing={2}>
              {useGradientForLogo ? (
                <React.Fragment>
                  <Grid item>
                    <Typography>Gradient Color A of Logo</Typography>
                    <SketchPicker
                      color={logoGradientColorA}
                      id="logoGradientColorA"
                      onChangeComplete={handleLogoGradientAColorChange}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Gradient Color B of Logo</Typography>
                    <SketchPicker
                      color={logoGradientColorB}
                      id="logoGradientColorB"
                      onChangeComplete={handleLogoGradientBColorChange}
                    />
                  </Grid>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Grid item>
                    <Typography>Color of Logo</Typography>
                    <SketchPicker
                      color={logoFilterColor}
                      id="logoFilterColor"
                      onChangeComplete={handleLogoFilterColorChange}
                    />
                  </Grid>
                </React.Fragment>
              )}
              {useGradientForLogoStripe ? (
                <React.Fragment>
                  <Grid item>
                    <Typography>Gradient Color A of Stripe</Typography>
                    <SketchPicker
                      color={logoStripeGradientColorA}
                      id="logoStripeGradientColorA"
                      onChangeComplete={handleLogoStripeGradientAColorChange}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Gradient Color B of Stripe</Typography>
                    <SketchPicker
                      color={logoStripeGradientColorB}
                      id="logoStripeGradientColorB"
                      onChangeComplete={handleLogoStripeGradientBColorChange}
                    />
                  </Grid>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    <Grid item>
                      <Typography>Color of Logo Stripe</Typography>
                      <SketchPicker
                        color={logoStripeColor}
                        id="logoStripeColor"
                        onChangeComplete={handleLogoStripeColorChange}
                      />
                    </Grid>
                  </React.Fragment>
              )}
              <React.Fragment>
                <Grid item>
                  <Typography>Color of Text</Typography>
                  <SketchPicker
                    color={textColor}
                    id="textColor"
                    onChangeComplete={handleTextColorChange}
                  />
                </Grid>
              </React.Fragment>
              {useGradientForBorder ? (
                <React.Fragment>
                  <Grid item>
                    <Typography>Gradient Color A of Border</Typography>
                    <SketchPicker
                      color={logoBorderGradientColorA}
                      id="logoBorderGradientColorA"
                      onChangeComplete={handleLogoBorderGradientAColorChange}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Gradient Color B of Border</Typography>
                    <SketchPicker
                      color={logoBorderGradientColorB}
                      id="logoBorderGradientColorB"
                      onChangeComplete={handleLogoBorderGradientBColorChange}
                    />
                  </Grid>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Grid item>
                    <Typography>Color of Border</Typography>
                    <SketchPicker
                      color={borderColor}
                      id="borderColor"
                      onChangeComplete={handleBorderColorChange}
                    />
                  </Grid>
                </React.Fragment>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer>
        Made with <span role="img" aria-label="heart">❤️</span> by bay
      </Footer>
    </React.Fragment>
  );
}