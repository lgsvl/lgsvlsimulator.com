import { useTheme, withTheme } from '@material-ui/core';
import Box, { BoxProps } from '@material-ui/core/Box';
import Grid, { GridProps } from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import BackgroundVideo, { BackgroundVideoProps } from 'src/components/BackgroundVideo';
import { LinkButton, ReadMoreButton, RequestDemoButton } from 'src/components/Button';
import Center from 'src/components/Center';
import { IconApollo, IconBaidu, IconUnity, IconVelodyne } from 'src/components/Icons';
import LayoutGrid from 'src/components/LayoutGrid';
import MoreArrows from 'src/components/MoreArrows';
import Page, { PageSection } from 'src/components/Page';
import { SectionContent, VisualizationSection } from 'src/components/Section';
import SubscribeBox from 'src/components/SubscribeBox';
import { useTranslation } from 'src/hooks/useTranslations';
import srcCloudPoster from 'src/images/cloud-simulation.jpg';
import srcDigitalTwinPoster from 'src/images/digital-twin.jpg';
import srcSimulationPoster from 'src/images/simulation-platform.jpg';
import srcDigitalTwinVideo from 'src/videos/digital-twin.mp4';
import srcSimulationVideo from 'src/videos/simulation-platform.mp4';
import srcCloudVideo from 'src/videos/vis-2.mp4';
import styled from 'styled-components';
import videoSrcHero from '../videos/vis-1.mp4';
import videoSrcWiseVis from '../videos/vis-borregas.mp4';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const SmallVideo: React.FC<BackgroundVideoProps> = props => (
  <BackgroundVideo
    height={{ xs: 200, sm: 300, md: 456 }}
    mb={{ xs: 2, md: 5 }}
    borderRadius='borderRadius'
    fit='cover'
    {...props}
  />
);

const HeroGrid = withTheme(styled(Grid)`
  height: 100%;
  position: relative;
`) as React.FC<GridProps>;

const SilhouettedContent = withTheme(styled(Box)`
  // Commented out shadow, in case there's a picture or video behind the logos in the future. -BS
  // ${({ theme }) => `
  //   filter:
  //     drop-shadow(0px 0px 2px ${theme.palette.background.default})
  //     drop-shadow(0 0px 4px ${theme.palette.background.default})
  //     drop-shadow(0 0px 20px ${theme.palette.background.default});
  // `}
`) as React.FC<BoxProps>;

const brandIconProps = { color: '#6D7B97', height: 40, width: '100%' };

export default function Home() {
  const { t, tMap } = useTranslation();
  const theme = useTheme();
  const isXs = !useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Page>
      <PageSection>
        <Box mb={15} height='70vh' maxHeight={720} position='relative'>
          <BackgroundVideo src={videoSrcHero} position='absolute' style={{ position: 'absolute' }}>
            <Typography>
              A video of Lidar scanning an environment, with a simulated vehicle driving down a street.
            </Typography>
          </BackgroundVideo>
          <HeroGrid container direction='column' alignItems='center' justify='center'>
            <Grid item>
              <Typography variant='h1'>{t('home.title')}</Typography>
            </Grid>
            <Grid item>
              <Center disableGutters maxWidth={720}>
                <Typography>{t('home.body')}</Typography>
                <Box mt={6}>
                  <Grid container spacing={4} justify='center'>
                    <Grid item>
                      <RequestDemoButton variant='outlined' />
                    </Grid>
                    <Grid item>
                      <LinkButton color='primary' buttonVariant='contained' to='/docs/getting-started/' target='_blank'>
                        {t('main.buttons.getStarted')}
                      </LinkButton>
                    </Grid>
                  </Grid>
                </Box>
              </Center>
            </Grid>
          </HeroGrid>
          <Box p={2} textAlign='center'>
            <MoreArrows />
          </Box>
        </Box>
      </PageSection>

      <PageSection>
        <Box my={15}>
          <VisualizationSection title={t('home.section1.title')} variant='h3' video={videoSrcWiseVis}>
            {t('home.section1.body')}
          </VisualizationSection>
        </Box>
      </PageSection>

      <PageSection>
        <Box my={15}>
          <VisualizationSection title={t('home.section2.title')} flip variant='h3' video={videoSrcWiseVis}>
            {t('home.section2.body')}
          </VisualizationSection>
        </Box>
      </PageSection>

      <SilhouettedContent my={15}>
        <Center disableGutters maxWidth={720}>
          <LayoutGrid xs={2} sm={2 /* Set to the amount of logos for one row */} spacing={2}>
            {/* <IconBaidu {...brandIconProps} /> */}
            <IconApollo {...brandIconProps} />
            {/* <IconUnity {...brandIconProps} /> */}
            <IconVelodyne {...brandIconProps} />
          </LayoutGrid>
        </Center>
      </SilhouettedContent>

      <Box my={15}>
        <PageSection>
          <LayoutGrid xs={1} sm={3} spacing={3}>
            <Box>
              <SmallVideo poster={srcSimulationPoster} src={srcSimulationVideo} />
              <SectionContent title={t('home.features.0.title')}>{t('home.features.0.body')}</SectionContent>
            </Box>
            <Box order={isXs ? null : 4}>
              {/* DEV NOTE: Rather than using the normal readMore button that's built into SectionContent,
               * We've specifically broken the button out into its own grid element box, so it can be
               * assigned a custom order based on the screen size. When the screen is sm or larger,
               * the grid is actually a 3x2 matrix, with the content on the first row and the buttons
               * on the second row, so they all vertically line up. `4` used below just represents a
               * number, greater than 3. When order number is the same, DOM order is used.
               */}
              <ReadMoreButton to='/product/simulation/' />
            </Box>
            <Box>
              <SmallVideo poster={srcCloudPoster} src={srcCloudVideo} />
              <SectionContent title={t('home.features.1.title')}>{t('home.features.1.body')}</SectionContent>
            </Box>
            <Box order={isXs ? null : 4}>
              <ReadMoreButton to='/product/cloud/' />
            </Box>
            <Box>
              <SmallVideo poster={srcDigitalTwinPoster} src={srcDigitalTwinVideo} />
              <SectionContent title={t('home.features.2.title')}>{t('home.features.2.body')}</SectionContent>
            </Box>
            <Box order={isXs ? null : 4}>
              <ReadMoreButton to='/product/digitaltwin/' />
            </Box>
          </LayoutGrid>
        </PageSection>
      </Box>

      <SubscribeBox />
    </Page>
  );
}
