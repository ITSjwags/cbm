import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import bardoSrc from '../images/Bardo Zsa Zsa Cover.jpg'
import bardoPdf from '../images/Bardo Zsa Zsa First Sample Chapter.pdf'
import cuteSrc from '../images/Cute Eats Cute Cover.jpg'
import cutePdf from '../images/Cute Eats Cute Sample First Chapter.pdf'
import endSrc from '../images/End of Men Cover Websit.jpg'
import endPdf from '../images/End of Men Sample First Chapter.pdf'

import seoKeywords from '../data/keywords-writing'

const Writing = ({ path }) => (
  <Layout path={path}>
    <SEO title="Writing" keywords={seoKeywords} />
    <Home>
      <HomeLink to="/" target="_blank" rel="noopener noreferrer">
        Home
      </HomeLink>
    </Home>
    <Container>
      <Left>
        <img src={bardoSrc} alt="Bardo Zsa Zsa" />
        <Title>RELEASING SOON!</Title>
        <ChapterLink href={bardoPdf} target="_blank">
          SAMPLE
          <br />
          FIRST CHAPTER
        </ChapterLink>
      </Left>
      <Right>
        <Title>BARDO ZSA ZSA (2019)</Title>
        <Copy>
          After experiencing a series of harrowing Gilligan's Island themed
          alien abductions, Russell Johnson flees his midwestern life for the
          safety of a Californian UFO cult that promises a benevolent starship
          rescue. Instructed to "drop their husks" via vodka, pills, and
          applesauce by their eccentric leader, Russ and the members of Heaven's
          Gate manage to reach an alien spacecraft, but to their horror, realize
          it belongs to Xenu, the same media-obsessed pants-less warlord who had
          been abducting Russ. Despite finding humans entertaining, Xenu plans
          to reboot the Earth, keeping The Gaties as specimens of the imminently
          extinct human race. Appealing to the powerful alien's love of tacky
          earth culture, Russ convinces Xenu to give humanity a final chance:
          three sci-fi B-Movie scenarios where Russ and his crew would be
          embedded into the bodies of the leading characters. Can Russ and his
          team prove humanity is worth saving while wrestling with the
          subconscious personalities of the beings they have taken over? And
          what does 'worth saving' even mean to the unpredictable Xenu? In the
          tradition of Kurt Vonnegut Bardo Zsa Zsa explores character and the
          human condition through the medium of science fiction.
        </Copy>
      </Right>
    </Container>
    <Container>
      <Left>
        <img src={endSrc} alt="End of Men" />
        <BuyLink
          href="https://www.amazon.com/End-Men-C-B-Murphy/dp/0983091250"
          target="_blank"
        >
          BUY HERE
        </BuyLink>
        <ChapterLink href={endPdf} target="_blank">
          SAMPLE
          <br />
          FIRST CHAPTER
        </ChapterLink>
      </Left>
      <Right>
        <Title>END OF MEN (2012)</Title>
        <Copy>
          C. B. Murphy's End of Men is a satiric tour de force about the
          ambiguity of identity where art intersects relationship. Inspired by
          The Magus, the book takes a successful Chicago couple through
          life-altering experiences ending on an Italian island run by a
          Warholian student of Aleister Crowley and his Iranian-feminist femme
          fatale. Adrift in midlife angst, financier Ben withholds the secrets
          of his wild past from his younger wife Kay. In horror at becoming a
          suburban "Beige," Kay longs for her own walk on the wild side. As
          assistant curator of a feminist-themed outsider art exhibit, the End
          of Men, Kay contacts Ben's estranged friends, the narcissistic Gordon
          and the exotic Shiraz, who run a film school on a Mediterranean
          island. Their secret is that it is a struggling place where underpaid
          Eurotrash produce factory art while working as grips and extras on
          Shiraz's underfunded masterpieces of neo-feminist surrealism. When the
          self-styled enfants terribles premier their film at Kay's museum,
          Ben's past crashes through its barriers. Caught in the nether zone of
          grief and confusion, he accepts an invitation to "vacation" at the
          island described as an artists' paradise. In Magus territory now, Ben
          and Kay become pawns in bizarre psychological games of erotic
          adventure with the promise of a renewed marriage through the
          reawakening of Ben's wild heart. In this swirling circus of
          eccentricity, Ben's ability to distinguish what is real quickly erodes
          as he and Kay become performers in Gordon and Shiraz's final film, a
          reenactment of the immolation of Jacques de Molay, the last Knights
          Templar. As simmering violence threatens to become more than cinematic
          metaphor, Ben and Kay realize the manipulations have become dangerous.
        </Copy>
      </Right>
    </Container>
    <Container>
      <Left>
        <img src={cuteSrc} alt="Cute Eats Cute" />
        <BuyLink
          href="https://www.amazon.com/Cute-Eats-C-B-Murphy/dp/0934150109/"
          target="_blank"
        >
          BUY HERE
        </BuyLink>
        <ChapterLink href={cutePdf} target="_blank">
          SAMPLE
          <br />
          FIRST CHAPTER
        </ChapterLink>
      </Left>
      <Right>
        <Title>CUTE EATS CUTE (2012)</Title>
        <Copy>
          If Holden Caulfield faced our environmental politics he might sound
          like Cute Eats Cute's 15-year-old narrator. When deer are slated for
          culling from an urban park Sam's life gets weird as his mother goes
          Wiccan, his ranger dad veers right, and his eco-warrior tribe
          exacerbates community upheaval. Ripe with paradox, irony, and laughs,
          Cute Eats Cute journeys through each factions' utopias while Sam
          discovers that growing up is not just about whose boat you're in, but
          taking the helm and navigating turbulent waters.
        </Copy>
      </Right>
    </Container>
  </Layout>
)

const Home = styled.div`
  align-content: center;
  display: grid;
  flex: 1;
  padding: 1vw 4vw 0 4vw;
  place-items: flex-end;
`

const linkStyles = css`
  border-bottom: 2px solid currentColor;
  color: #3636ff;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 250ms ease;

  &:hover {
    border-color: transparent;
  }
`

const HomeLink = styled(Link)`
  font-size: 9vw;
  ${linkStyles};
`

const Container = styled.div`
  display: flex;
  padding: 0 2vw 2vw 2vw;

  > span {
    flex: 1;
  }

  &:last-of-type {
    padding-bottom: 4vw;
  }
`

const Left = styled.div`
  padding: 0 2vw;
  width: 50vw;

  > img {
    display: block;
    width: 100%;
  }
`

const Title = styled.h3`
  font-size: 4.6vw;
  font-weight: bold;
  margin: 3vw 0;
  text-transform: uppercase;
`

const BuyLink = styled.a`
  display: inline-block;
  font-size: 5.4vw;
  margin: 2vw 0 6vw 0;
  ${linkStyles};
`

const ChapterLink = styled.a`
  font-size: 5.3vw;
  ${linkStyles};
`

const Right = styled.div`
  padding: 0 2vw;
  width: 50vw;
`

const Copy = styled.p`
  font-size: 2.4vw;
`

Writing.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Writing
