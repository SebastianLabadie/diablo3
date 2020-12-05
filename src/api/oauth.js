import axios from "axios";

const clientId = "80b9221a43fa4851a366c6a209c64bd7";
const clientSecret = "PmfF1E40N4hTI3TqYeELOxrPUEU3RWJ4";

// API URL para hacer oauth
const region = "eu";
const API_URL = `https://${region}.battle.net/oauth/token`;

function getToken() {
  const formData = new FormData();

  formData.append("grant_type", "client_credentials");

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
    // Nuestros datos de cliente para OAuth: id y secret
    auth: { username: clientId, password: clientSecret }
  };

  return axios.post(API_URL, formData, config);
}

export { getToken };
