"use client"

import {useState} from 'react'
import styles from "./page.module.css";
import ListagemDePessoas from './components/ListagemDePessoas.jsx'

export default function Home() {


  return (
    <div className="">
      
     <h1>Simple CRUD</h1> 

    <ListagemDePessoas />
    </div>
  );
}
