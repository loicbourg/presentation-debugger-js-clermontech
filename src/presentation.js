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
                    <ol>
                        <li>
                            <h2>console.log bien jusqu'a un certain point</h2>
                        </li>
                        <li>
                            <h2>état du DOM juste avant / aprés une opération</h2>
                        </li>
                        <li>
                            <h2> info call stack / valeurs variables </h2>
                        </li>
                    </ol>
                </Notes>

        </Slide>

        <Slide align="center flex-start"  bgPosition="bottom right" bgImage="images/install.jpg" >
            <Heading>
                Compliqué ?
            </Heading>

            <Notes>
                <ol>
                    <li>
                        <h2>peur compliqué à utiliser ? ( bower, webpack, npm, yarn, parcel, version de node....)</h2>
                    </li>
                    <li>
                        <h2> besoin: navigateur, éditeur de texte, et clavier pour taper debugger; </h2>
                    </li>
                </ol>
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
                <ol>
                    <li>
                        <h2>hover souris valeur variable</h2>
                    </li>
                </ol>
            </Notes>

        </Slide>

        <Slide align="center flex-start" bgImage="images/demo.jpg" >
            <Heading>
                Exemple 2
            </Heading>

            <Notes>
                <ol>
                    <li>
                        <h2>stop avant opération sur le dom</h2>
                    </li>
                    <li>
                        <h2>scope</h2>
                    </li>
                    <li>
                        <h2>hover souris argument: typo</h2>
                    </li>

                </ol>

            </Notes>
        </Slide>

          <Slide align="center flex-start" bgImage="images/demo.jpg" >
              <Heading>
                  Exemple 3
              </Heading>

              <Notes>
                  <h2>Dom breakpoint</h2>
                  <ol>
                      <li>
                          <h2>on ne sait pas quel script édite le dom</h2>
                      </li>
                      <li>
                          <h2>utils monstrueux</h2>
                      </li>
                      <li>
                          <h2>ctrl + f ne donne rien</h2>
                      </li>
                  </ol>

              </Notes>
          </Slide>

          <Slide align="center flex-start" bgImage="images/demo.jpg" >
              <Heading>
                  Exemple 4
              </Heading>

              <Notes>
                  <h2>Event breakpoint</h2>
                  <ol>
                      <li>
                          <h2>on ne sait pas quel script édite le dom</h2>
                      </li>
                      <li>
                          <h2>Source -> Event listener break -> Mouse -> click</h2>
                      </li>
                  </ol>

              </Notes>
          </Slide>

          <Slide align="center flex-start" bgImage="images/demo.jpg" >
              <Heading>
                  Exemple 5
              </Heading>

              <Notes>
                  <h2>Bug calculatrice</h2>
                  <ol>
                      <li>
                          <h2>Event breakpoint ->  Control -> submit</h2>
                      </li>
                      <li>
                          <h2>step over jusqu'a updateResult</h2>
                      </li>
                      <li>
                          <h2>watch typeof value1</h2>
                      </li>
                      <li>
                          <h2>console test value1 + value2 avec et sans parseInt</h2>
                      </li>
                  </ol>

              </Notes>
          </Slide>

          <Slide bgImage="images/ok.webp" >
              <Notes>
                  <ol>
                      <li>
                          <h2>Outils puissant ayant beaucoup de possibilités</h2>
                      </li>
                      <li>
                          <h2>Utilisez le quand vous avez besoin d'observer vos scripts !</h2>
                      </li>
                  </ol>
                  <h2>

                  </h2>
              </Notes>
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
