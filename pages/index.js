import Head from "next/head";
import Hero from "../Components/Hero";
import PopularMakeup from "../Components/PopularMakeup";
import PopularMehndi from "../Components/PopularMehndi";
import SafetyStandards from "../Components/SafetyStandards";
import Services from "../Components/Services";
import Venues from "../Components/Venues";
import InHouseService from "../Components/InHouseService";
import PopularHotel from "../Components/PopularHotel";
import WeddingIdeas from "../Components/WeddingIdeas";
import PopularDecor from "../Components/PopularDecor";
import RealWeddings from "../Components/RealWeddings";
import PopularPhotographer from "../Components/PopularPhotographer";
import WeddingBlogs from "../Components/WddingBlogs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMehndis, GetHotels, GetMakeups, GetDecors, GetPhotographers } from "../redux/actions/HomeActions";


export default function Home({ Hotel }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "check" });
  }, []);

  useEffect(() => {
    dispatch(GetMehndis());
    dispatch(GetHotels());
    dispatch(GetMakeups());
    dispatch(GetPhotographers());
    dispatch(GetDecors());
  }, []);

  const { mehndi, hotel, makeup, photographer, decor, } = useSelector((state) => state.homeReducer);

  console.log("mehndi", mehndi);
  // console.log("hotel", hotel);
  // console.log("makeup", makeup);
  // console.log("photographer", photographer);
  // console.log("decor", decor);

  return (
    <>
      <Head>
        <title>Wedcell</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Hero />
      <SafetyStandards />
      <Services />
      <PopularMakeup makeup={makeup} />
      <Venues />
      <PopularMehndi mehndi={mehndi} />
      <InHouseService />
      <PopularHotel hotel={hotel} />
      <WeddingIdeas />
      <PopularDecor decor={decor} />
      <RealWeddings />
      <PopularPhotographer photographer={photographer} />
      <WeddingBlogs />
    </>
  );
}
