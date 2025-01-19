const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center">
      <h3 className="text-4xl font-bold uppercase ">{heading}</h3>
      <p className="text-sm md:text-base mt-5">--- {subHeading} ---</p>
    </div>
  );
};

export default SectionTitle;
