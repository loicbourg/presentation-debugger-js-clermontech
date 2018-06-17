// Import React
import React from 'react';

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
  Image
} from 'spectacle';

// Import theme
import createTheme from 'spectacle-theme-nova';
// Require CSS
require('normalize.css');

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Debugger JavaScript
          </Heading>

          <Notes>
            outils pas assez connu je trouve, car à mettre entre toutes les mains
          </Notes>

        </Slide>
        
        <Slide>
          <Heading >
            QUI SUIS JE ?
          </Heading>
          <List>
              <ListItem>
                Loïc BOURG (@LoicBourg63) 
              </ListItem>
              <ListItem>
                Développeur PHP 
              </ListItem>
              <ListItem>
                Travaille à ITNETWORK 
              </ListItem>
          </List>
        </Slide>

        <Slide>
            <Heading size={3} >
                POURQUOI UTILISER UN DEBUGGER ?

                <Notes>
                    <p> console.log bien jusqu'a un certain point </p>
                    <p> état du DOM juste avant / aprés une opération </p>
                    <p> info call stack / valeurs variables </p>
                </Notes>

            </Heading>
        </Slide>

        <Slide>
          image chasse au bug ?
        </Slide>

        <Slide>
          compliqué à installer ? 



            <p> peur compliqué à utiliser ? ( bower, webpack, npm, yarn, parcel, version de node....) </p>
            <p> besoin: navigateur, éditeur de texte, et clavier pour taper debugger; </p>


          DEBUGGER;
        </Slide>

        <Slide>
            exemple 1: debugger; boucle simple
        </Slide>

        <Slide>
            exemple 2: debugger avec lib 
            -> call stack
            -> scope
            -> step over
            -> step out
            -> console scope 
            -> jquery montrer debug avant / aprés état du dom
        </Slide>

        <Slide>
            exemple 3: Dom breakpoint -> on ne sait pas quel script édite le dom
        </Slide>

        <Slide>
            exemple 4: event listener break points
        </Slide>

        <Slide>
            exemple 5: bug avec ajout 
        </Slide>

        <Slide>
            exemple 5: connect VS CODE ? 
        </Slide>


        <Slide>
            Questions ?
        </Slide>
      </Deck>
    );
  }
}
