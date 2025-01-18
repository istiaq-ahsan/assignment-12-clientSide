const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center py-10">
      <h3 className="text-4xl font-bold uppercase ">{heading}</h3>
      <p className="text-gray-900 mt-5">--- {subHeading} ---</p>
    </div>
  );
};

export default SectionTitle;
