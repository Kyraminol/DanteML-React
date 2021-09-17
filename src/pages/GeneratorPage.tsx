import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'

const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const MainBox = styled(Box)`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GeneratedBox = styled(Box)`
  margin-top: 2rem;
  text-align: center;
  word-break: break-word;
`

const GeneratorPage: React.FC = () =>  {
  const {t} = useTranslation()
  const [words, setWords] = useState<number>(15)
  const [inputText, setInputText] = useState<string>('')
  const [generatedText, setGeneratedText] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    fetch(
      `http://localhost:5000/generate`,
      {
        method: 'POST',
        body: JSON.stringify({words, inputText})
      }
    )
      .then(response => response.json())
      .then(data => data && data.text && setGeneratedText(data.text));
  }

  return (
    <Main maxWidth="xl" disableGutters>
      <MainBox>
        <Typography component="h1" variant="h2">
          {t('generator.title')}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 5}}>
          <TextField
            required
            fullWidth
            id="words"
            type="number"
            label={t('generator.wordsLabel')}
            helperText={t('generator.wordsHelper')}
            sx={{mt: 2, mb: 2}}
            value={words}
            onChange={(event) => setWords(parseInt(event.target.value))}
          />
          <TextField
            fullWidth
            multiline
            id="inputText"
            label={t('generator.inputTextLabel')}
            helperText={t('generator.inputTextHelper')}
            sx={{mt: 2, mb: 2}}
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 2, mb: 2}}
          >
            {t('generator.submit')}
          </Button>
        </Box>
        { !!generatedText && (
          <GeneratedBox>
            <Typography component="h1" variant="h3">
              { t('generator.result') }
            </Typography>
            <Typography>
              { generatedText }
            </Typography>
          </GeneratedBox>
        )}
      </MainBox>
      <Footer />
    </Main>
  )
}

export default GeneratorPage
