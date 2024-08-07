import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import User from "../../components/user/User";
import Course from "../../components/course/Course";
import Country from "../../components/country/Country";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Footer/>
            <Button title={"CLose"}/>
            <Button title={'Open'}/>
            <Button title={'Save'}/>
            <Button title={'Delete'}/>
            <Button title={'Done'}/>
            <User name={'Syrga'} age={'18'}/>
            <Course direction={'backend'} language={'python'}/>
            <Course direction={'frontend'} language={'javascript'}/>
            <Country country={'France'} capital={'Paris'}/>
            <Country country={'Kyrgyzstan'} capital={'Bishkek'}/>
            <Country country={'Turkey'} capital={'Ankara'}/>
        </div>
    );
};

export default MainPage;