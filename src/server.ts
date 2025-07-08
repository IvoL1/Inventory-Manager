import { app } from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => console.warn(`Server running on localhost:${port}`));
