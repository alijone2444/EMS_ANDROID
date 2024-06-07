import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import createAuthenticatedRequest from '../../components/RequestWithHeader/requestWithHeader';
import GlobalConstant from '../../constants/GlobalConstants';
import { setEventsDataAll } from '../../ReduxStore/actions/eventsDataActionUser';
import { useSelector } from 'react-redux';
const AllEventDataProvider = () => {
    const dispatch = useDispatch();
    const allevents = useSelector(state => state.userAllEvents)
    useEffect(() => {
        const fetchData = async () => {
            if (allevents.length === 0) {
                try {
                    const requestInstance = await createAuthenticatedRequest();
                    const recentResponse = await requestInstance.get(`${GlobalConstant.baseUrl}get-events`, {
                        params: { amount: 'All' },
                    });
                    dispatch(setEventsDataAll(recentResponse.data.events));

                } catch (error) {
                    console.log("Error fetching events:", error);
                }
            }
        };

        fetchData();
    }, [dispatch]);

    return null;
};

export default AllEventDataProvider;
