import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import createAuthenticatedRequest from '../../components/RequestWithHeader/requestWithHeader';
import GlobalConstant from '../../constants/GlobalConstants';
import { setEventsDataUserRecent, setEventsDataUserUpcoming } from '../../ReduxStore/actions/eventsDataActionUser';
import { useSelector } from 'react-redux';
const EventDataProvider = () => {
    const dispatch = useDispatch();
    const recent = useSelector(state => state.userRecentEvents);
    const upcoming = useSelector(state => state.userUpcomingEvents);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const requestInstance = await createAuthenticatedRequest();
                const recentResponse = await requestInstance.get(`${GlobalConstant.baseUrl}get-events`, {
                    params: { amount: 'recent' },
                });
                dispatch(setEventsDataUserRecent(recentResponse.data.events));
                console.log(recentResponse.data.events)
                const upcomingResponse = await requestInstance.get(`${GlobalConstant.baseUrl}get-events`, {
                    params: { amount: 'get-upcoming' },
                });
                dispatch(setEventsDataUserUpcoming(upcomingResponse.data.events));

            } catch (error) {
                console.log("Error fetching events:", error);
            }
        };
        if (recent.length === 0 || upcoming.length === 0) {
            fetchData();
        }
    }, [dispatch]);

    return null;
};

export default EventDataProvider;
