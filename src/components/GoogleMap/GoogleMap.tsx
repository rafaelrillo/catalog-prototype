const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5201470404095!2d-65.27980212341744!3d-26.82340367670051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225dbe01bccf6d%3A0xe7c9b7c9f92dd791!2sPopa%20Cakes!5e0!3m2!1ses-419!2sar!4v1735582009952!5m2!1ses-419!2sar"
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: '10px' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;