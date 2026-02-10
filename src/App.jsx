import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout';
import {
  HomePage,
  AboutPage,
  ServicesPage,
  NewsPage,
  ContactsPage,
  StructurePage,
  TrainingPage,
  DocumentsPage,
  AnticorruptionPage,
  ProposalsPage,
  NotFoundPage,
} from './pages';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="structure" element={<StructurePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="training" element={<TrainingPage />} />
            <Route path="documents" element={<DocumentsPage />} />
            <Route path="anticorruption" element={<AnticorruptionPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="proposals" element={<ProposalsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
