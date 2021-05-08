import React from 'react';
import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import '../App.css';

export default function Home() {
    return (
        <section className="home">
            < Header />
            < Hero/>
        </section>
    )
}