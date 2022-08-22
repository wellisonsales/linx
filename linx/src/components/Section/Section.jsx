import React from 'react'
import Info from '../Info/Info'
import Form from '../Form/Form'
import S from "../Section/Section.module.css"

const Section = () => {
  return (
    <section className={S.section}>
      <Info/>
      <Form/>
    </section>
  )
}

export default Section