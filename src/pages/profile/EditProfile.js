import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'antd/lib/modal';

import {
    EditProfileButton,
    Label,
    Error,
    InputField,
} from './profilePageStyledComponents';

const propTypes = {
    author: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
};

const EditProfile = ({ author, updateUser }) => {
    const [visible, setVisibility] = useState(false);
    const [name, setName] = useState(author.name);
    const [bio, setBio] = useState(author.bio);
    const [phone, setPhone] = useState(author.phone || "");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = () => {
        const operations = [];
        const successCallback = () => {
            setVisibility(false);
        };
        const errorCallback = (response) => {
            setError(response && response.data && response.data.message);
        };

        if (name !== author.name) {
            operations.push({ "op": "set", "path": "/user/name", "value": name });
        }
        if (bio !== author.bio) {
            operations.push({ "op": "set", "path": "/user/bio", "value": bio });
        }
        if (phone !== author.phone) {
            operations.push({ "op": "set", "path": "/user/phone", "value": phone });
        }
        if (password === confirmPassword && password !== "") {
            operations.push({ "op": "set", "path": "/user/password", "value": password });
        } else if (password !== confirmPassword) {
            setError("Password mismatch");
        }

        if (error == "") {
            updateUser({ "operations": operations }, successCallback, errorCallback);
        }
    };

    return (
        <React.Fragment>
            <EditProfileButton onClick={() => setVisibility(true)}>Edit Profile</EditProfileButton>
            <Modal
                title="Basic Modal"
                visible={visible}
                maskClosable={false}
                onOk={() => { }}
                onCancel={onSubmit}
            >
                <Label>Name</Label>
                <InputField onChange={(e) => setName(e.target.value)} value={name} />
                <Label>Bio</Label>
                <InputField onChange={(e) => setBio(e.target.value)} value={bio} />
                <Label>Phone</Label>
                <InputField type="number" onChange={(e) => setPhone(e.target.value)} value={phone} />
                <Label>Password</Label>
                <InputField type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <Label>Confirm Password</Label>
                <InputField type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                <Error>{error}</Error>
            </Modal>
        </React.Fragment>
    );
};

EditProfile.propTypes = propTypes;

export default EditProfile;
