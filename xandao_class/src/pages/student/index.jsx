import React from 'react';
import "./student.css";
import {useState, useEffect} from 'react';
import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs, doc, deleteDoc} from 'firebase/firestore';

const Student = () =>
{
    return(
        <>
            <main>
                <h1>Alunos</h1>
                <div className="body">

                </div>
            </main>
            
        </>
    );
}


export default Student;