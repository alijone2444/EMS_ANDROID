import * as React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import GlobalConstant from '../../constants/GlobalConstants';

function Crousel({ data }) {
    const width = Dimensions.get('window').width;
    const prepareImageData = (data) => {
        const imageUrls = data.imageFileNames.map(item => `${GlobalConstant.baseUrl}images/${item}`);
        const mainDpImageUrl = `${GlobalConstant.baseUrl}images/${data.dpimageFileName}`;
        return [mainDpImageUrl, ...imageUrls];
    };

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width}
                autoPlay={true}
                data={prepareImageData(data)}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => { }}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={{ uri: item }}
                            style={{
                                width: width,
                                height: width,
                                resizeMode: 'cover',
                            }}
                        />
                    </View>
                )}
            />
        </View>
    );
}

// Define prop types
Crousel.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dpimageFileName: PropTypes.string.isRequired,
        })
    ).isRequired,
};

// Provide default props
Crousel.defaultProps = {
    data: [],
};

export default Crousel;
