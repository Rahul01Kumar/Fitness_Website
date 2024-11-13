// src/pages/Schedule.js
import React from "react";
import styled from "styled-components";
import bg from "../assets/img_8.jpg";  

export default function Schedule() {
  return (
    <ScheduleWrapper>
      <ScheduleTitle>Fitness Gym Class Schedule</ScheduleTitle>
      <ScheduleTable>
        <TableHeader>
          <TableRow>
            <TableHeading>Day</TableHeading>
            <TableHeading>Time</TableHeading>
            <TableHeading>Class</TableHeading>
            <TableHeading>Instructor</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableData>Monday</TableData>
            <TableData>6:00 AM - 7:00 AM</TableData>
            <TableData>Yoga</TableData>
            <TableData>Sarah Lee</TableData>
          </TableRow>
          <TableRow>
            <TableData>Monday</TableData>
            <TableData>5:00 PM - 6:00 PM</TableData>
            <TableData>HIIT</TableData>
            <TableData>Mike Ross</TableData>
          </TableRow>
          <TableRow>
            <TableData>Tuesday</TableData>
            <TableData>7:00 AM - 8:00 AM</TableData>
            <TableData>Cardio Blast</TableData>
            <TableData>Emma Stone</TableData>
          </TableRow>
          <TableRow>
            <TableData>Wednesday</TableData>
            <TableData>6:00 PM - 7:00 PM</TableData>
            <TableData>Strength Training</TableData>
            <TableData>John Doe</TableData>
          </TableRow>
          <TableRow>
            <TableData>Thursday</TableData>
            <TableData>5:00 PM - 6:00 PM</TableData>
            <TableData>Zumba</TableData>
            <TableData>Mary Johnson</TableData>
          </TableRow>
          <TableRow>
            <TableData>Friday</TableData>
            <TableData>8:00 AM - 9:00 AM</TableData>
            <TableData>Pilates</TableData>
            <TableData>Jane Smith</TableData>
          </TableRow>
          <TableRow>
            <TableData>Saturday</TableData>
            <TableData>10:00 AM - 11:00 AM</TableData>
            <TableData>CrossFit</TableData>
            <TableData>Chris Evans</TableData>
          </TableRow>
        </TableBody>
      </ScheduleTable>
    </ScheduleWrapper>
  );
}

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-image: url(${bg});  // Apply background image
  background-size: cover;  // Ensure the background covers the entire div
  background-position: center;  // Center the background
  min-height: 80vh;
`;

const ScheduleTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #fff;  // Adjust text color to ensure readability against the background
  font-weight: bold;
`;

const ScheduleTable = styled.table`
  width: 100%;
  max-width: 800px;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.8);  // Semi-transparent background to stand out
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.thead`
  background-color: #007bff;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeading = styled.th`
  padding: 15px;
  font-size: 18px;
  color: white;
  text-align: left;
`;

const TableBody = styled.tbody``;

const TableData = styled.td`
  padding: 15px;
  font-size: 16px;
  color: #333;
  text-align: left;
`;
