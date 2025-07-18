
import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import AssignTeamPage from './components/AssignPages/AssignPage';
import Project from './components/AssignPages/ProjectAssign.js';
import AdminCards from './components/Home/AdminCrads.js';
import Navbar from './components/navbar/NavBar.js';
import Notify from './components/Announcements/NotificationPage.js';
import Notes from './components/Courses/ReferenceNotes.js';
import Savednotes from './components/Courses/NotesSummary.js';
import Attendance from './components/Attendance/Attendance.js';

import Todo from './components/Todo/todo';
import UnifiedLogin from './components/Login/unifiedlogin.js'; // ✅ Unified Login
import Calendar from "./components/calender/Calendar";
import TeamCreate from './components/teams/TeamCreate';
import DeleteTeam from './components/teams/DeleteTeam';
import EditTeam from './components/teams/EditTeam';
import Header from './components/Header/Header.js';

import './App.css';

import Footer from './components/Footer/Footer.js';
import PrivateRoute from './components/Auth/PrivateRoute.js';

import AdminDashboard from './components/Pages/AdminDashboard.js';
import ResetPassword from './components/Login/ResetPassword.js';
import ErrorPage from './components/error/error.js';

import ClubForm from "./components/ClubForm/ClubForm.js";
import ClubDetailPage from "./components/Clubpage/ClubDetailPage.js";
import Clubpage from "./components/Clubpage/Clubpage.js";
import ContactUs from './components/ContactUs/ContactUs.js';
import PastEvents from "./components/PastEvents/PastEvents.js";
import EventsPage from "./components/Pages/EventPage.js";
import MembersPage from "./components/Pages/MembersPage.js";
import AdminEventsPage from "./components/Pages/AdminEventPage.js";

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Routes">
        <Routes>
  {/* Public Routes */}
  <Route path="/" element={<Header />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="/clubs" element={<Clubpage />} />
  <Route path="/clubs/:clubId" element={<ClubDetailPage />} />
  <Route path="/pastevents" element={<PastEvents />} />
  <Route path="/login" element={<UnifiedLogin />} />
  <Route path="/resetPassword/:id/:token" element={<ResetPassword />} />
  <Route path="/error" element={<ErrorPage />} />
  <Route path="*" element={<ErrorPage />} />
  <Route path="/events" element={<EventsPage />} />

  {/* Admin Dashboard Routes */}
  <Route path="/admin/dashboard" element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>}>
    <Route path="events" element={<AdminEventsPage />} />
    <Route path="members" element={<MembersPage />} />
    <Route path="clubs" element={<div>...</div>} />
    <Route path="reports" element={<div>...</div>} />
    <Route path="attendance" element={<Attendance/>}/>
    <Route index element={<Navigate to="events" replace />} />
  </Route>

  {/* Member Routes */}
  <Route path="/admin-home" element={<PrivateRoute role="member"><AdminCards /></PrivateRoute>} />
  <Route path="/notify" element={<PrivateRoute role="member"><Notify /></PrivateRoute>} />
  <Route path="/projectassign" element={<PrivateRoute role="member"><Project /></PrivateRoute>} />
  <Route path="/teamassign" element={<PrivateRoute role="member"><AssignTeamPage /></PrivateRoute>} />
  <Route path="/notes" element={<PrivateRoute role="member"><Notes /></PrivateRoute>} />
  <Route path="/saved-data" element={<PrivateRoute role="member"><Savednotes /></PrivateRoute>} />
  {/* <Route path="/attendance" element={<PrivateRoute role="member"><Attendance /></PrivateRoute>} /> */}
    
  <Route path="/todo" element={<PrivateRoute role="member"><Todo /></PrivateRoute>} />
  <Route path="/calender" element={<PrivateRoute role="member"><Calendar /></PrivateRoute>} />
  <Route path="/admin-TeamCreate" element={<PrivateRoute role="member"><TeamCreate /></PrivateRoute>} />
  <Route path="/Admin-Teamedit" element={<PrivateRoute role="member"><EditTeam /></PrivateRoute>} />
  <Route path="/Admin-TeamDelete" element={<PrivateRoute role="member"><DeleteTeam /></PrivateRoute>} />
  <Route path="/ClubForm" element={<PrivateRoute role="member"><ClubForm /></PrivateRoute>} />
</Routes>

        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
