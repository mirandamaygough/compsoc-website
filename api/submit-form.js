module.exports = async (req, res) => {
    if (req.method !== 'POST') {
      return res.status(405).send('Method not allowed');
    }
  
    const { name, email, company, message } = req.body;
  
    // Here you can validate the form data and do something with it
    // For example, send an email, store it in a database, etc.
  
    // If everything went well, return a success status
    res.status(200).send('Form submitted successfully');
  };