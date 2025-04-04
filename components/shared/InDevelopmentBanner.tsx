import Banner from "./Banner";

export default function InDevelopmentBanner() {
  return (
    <>
      <Banner 
        texts={[
          "In Development",
          "New Features Coming Soon",
          "We're working on something amazing"
        ]}
      />
    </>
  )
}
