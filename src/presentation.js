// Import React
import React from 'react';
import styled from 'react-emotion';
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Image,
  CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle-theme-nova';
// import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme('nova');

const CustomHeading = styled(Heading)`
  color: #ffcc99;
  font-family: monospace;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgImage="images/home.jpg"  >
          <Heading textColor="white" size={1} fit caps lineHeight={1} >
              JavaScript Debugger
          </Heading>

          <Notes>
            outils pas assez connu je trouve, car à mettre entre toutes les mains
          </Notes>

        </Slide>
        
        <Slide bgImage="images/who.jpg" >
          <Heading fit>
            QUI SUIS JE ?
          </Heading>
          <List>
              <ListItem textColor="#7FC1CA" >
                  <Heading size={3}  >
                      Loïc BOURG (@LoicBourg63)
                  </Heading>
              </ListItem>
              <ListItem>
                  <Heading size={3}  >
                      Développeur
                  </Heading>

              </ListItem>
              <ListItem>
                  <Heading size={3}  >
                      Travaille à ITNETWORK
                  </Heading>
              </ListItem>
          </List>
        </Slide>

        <Slide  align="center flex-start"  bgImage="images/why.jpg"  >
            <Heading textColor="white" size={2} >
                POURQUOI ?
            </Heading>

                <Notes>
                    <p> console.log bien jusqu'a un certain point </p>
                    <p> état du DOM juste avant / aprés une opération </p>
                    <p> info call stack / valeurs variables </p>
                </Notes>

        </Slide>

        <Slide align="center flex-start"  bgPosition="bottom right" bgImage="images/install.jpg" >
            <Heading>
                Compliqué ?
            </Heading>

            <Notes>
            <p> peur compliqué à utiliser ? ( bower, webpack, npm, yarn, parcel, version de node....) </p>
            <p> besoin: navigateur, éditeur de texte, et clavier pour taper debugger; </p>
            </Notes>
        </Slide>

        <Slide >
            <CustomHeading textSize={120} >
                debugger;
            </CustomHeading>
        </Slide>

        <Slide align="center flex-start" bgImage="images/demo.jpg" >
            <Heading>
                Exemple 1
            </Heading>

            <Notes>
                debugger;
                hover souris valeur variable
            </Notes>

        </Slide>

        <Slide align="center flex-start" bgImage="images/demo.jpg" >
            <Heading>
                Exemple 2
            </Heading>

            <Notes>
                -> stop avant opération sur le dom
                -> scope
                -> hover souris argument: typo
            </Notes>
        </Slide>

          <Slide align="center flex-start" bgImage="images/demo.jpg" >
              <Heading>
                  Exemple 3
              </Heading>

              <Notes>
                  Dom breakpoint
                  -> on ne sait pas quel script édite le dom
                  -> utils monstrueux
                  -> ctrl + f ne donne rien

              </Notes>
          </Slide>

          <Slide align="center flex-start" bgImage="images/demo.jpg" >
              <Heading>
                  Exemple 4
              </Heading>

              <Notes>
                  Event breakpoint
                  -> on ne sait pas quel script édite le dom
                  -> Source -> Event listener break -> Mouse -> click

              </Notes>
          </Slide>

          <Slide align="center flex-start" bgImage="images/demo.jpg" >
              <Heading>
                  Exemple 5
              </Heading>

              <Notes>
                  Bug calculatrice
                  -> Event breakpoint ->  Control -> submit
                  -> step over jusqu'a updateResult
                  -> watch typeof value1
                  -> console test value1

              </Notes>
          </Slide>

          <Slide bgImage="images/ok.webp" >

          </Slide>

        <Slide bgColor="white" bgRepeat="no-repeat" bgSize="contain"  bgImage="images/question3.jpg" >
        </Slide>

      <Slide>
          Slide bonus connect VS code
      </Slide>
      </Deck>
    );
  }
}
