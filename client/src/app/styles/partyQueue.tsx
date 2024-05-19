import ReactModal from 'react-modal';
import React, {FC} from 'react';

const PartyQueue = () => {
    //
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };
    // display all the friends in the user's friend list
    return (
        < form onSubmit={handleSubmit}>
        </form>
    );
};

export default PartyQueue;