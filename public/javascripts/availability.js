//---------------------------------------------------------------------------------------------------------------
//Creation date: 11/15/2020
//Creator: Triston Martin
//Purpose: Control the insertion, deleting, and viewing of the availability table (user_availability)
//---------------------------------------------------------------------------------------------------------------


//Get all availabilities info for a specific day
function getAvailabilityForDay(int givenDay)

        //select email, day, start_Time, end_Time from user_availability where day=givenDay;

//Get all availability info for a specific person
function getAvailabilityForPerson(email/name)

        //select email, day, start_Time, end_Time from user_availability where email=email/name

//Get all availability info for a specific time
function getAvailabilityForTimeRange(givenTime)

        //select email, day, start_Time, end_Time from user_availability where start_Time<givenTime and end_Time>givenTime;


//Get all combinations of availability matching day and specific time
function getAvailabilityForDay-Time(int givenDay, givenTime)

        //select email, day, start_Time, end_Time from user_availability where day=givenDay, start_Time<givenTime, end_Time>givenTime;

//Get all combinations of availability matching person and day
function getAvailabilityForDay-Person(int givenDay, email/name)

        //select email, day, start_Time, end_Time from user_availability where day=givenDay, email=email/name;

//Get all combinations of availability matching person and time
function getAvailabilityForPerson-Time(email/name, givenTime)

        //select email, day, start_Time, end_Time from user_availability where email=email, start_Time<givenTime, end_Time>givenTime;

//Insert a new record
function insertAvailability(int givenDay, email/name, givenStartTime, givenEndTime)

        //

//Delete a record
function deleteAvailability(int givenDay, email/name, givenStartTime, givenEndTime)

        //



