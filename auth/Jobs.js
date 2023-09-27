import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Modal, TouchableOpacity } from 'react-native';

function Jobs() {
  const [job, setJob] = useState('');
  const [jobList, setJobList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedJob, setEditedJob] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedDate, setEditedDate] = useState('');
  const [editedIndex, setEditedIndex] = useState(-1);

  const handleAddJob = () => {
    if (job.trim() !== '') {
      setJobList([...jobList, { text: job, checked: false, description: '', date: '' }]);
      setJob('');
    }
  };

  const handleToggleCheckBox = (index) => {
    const updatedJobList = [...jobList];
    updatedJobList.splice(index, 1);
    setJobList(updatedJobList);
  };

  const handleEditJob = (index) => {
    setEditedIndex(index);
    setEditedJob(jobList[index].text);
    setEditedDescription(jobList[index].description);
    setEditedDate(jobList[index].date);
    setModalVisible(true);
  };

  const handleSaveEdit = () => {
    if (editedIndex !== -1) {
      const updatedJobList = [...jobList];
      updatedJobList[editedIndex].text = editedJob;
      updatedJobList[editedIndex].description = editedDescription;
      updatedJobList[editedIndex].date = editedDate;
      setJobList(updatedJobList);
      setModalVisible(false);
      setEditedIndex(-1);
      setEditedJob('');
      setEditedDescription('');
      setEditedDate('');
    }
  };

  const handleDeleteJob = (index) => {
    const updatedJobList = [...jobList];
    updatedJobList.splice(index, 1);
    setJobList(updatedJobList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>JOBS</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a job"
          value={job}
          onChangeText={(text) => setJob(text)}
        />
        <Button
          title="Add"
          onPress={handleAddJob}
          disabled={!job}
        />
      </View>

      <Text style={styles.label}>JOBS LIST:</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={jobList}
          renderItem={({ item, index }) => (
            <View style={styles.jobContainer}>
              <View style={styles.jobItemContainer}>
                <TouchableOpacity onPress={() => handleToggleCheckBox(index)}>
                  <Text style={styles.checkBox}>
                    {item.checked ? '☑' : '☐'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleEditJob(index)}>
                  <Text style={styles.jobItem}>
                    {item.text.length > 8 ? `${item.text.substring(0, 8)}...` : item.text}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.jobInfoContainer}>
                {item.description !== '' && (
                  <Text style={styles.jobDescription}>
                    {item.description}
                  </Text>
                )}
                {item.date !== '' && (
                  <Text style={styles.jobDate}>{item.date}</Text>
                )}
              </View>
              <TouchableOpacity onPress={() => handleDeleteJob(index)}>
                <Text style={styles.deleteButton}>Borrar</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalSection}>
              <Text style={styles.label}>Job:</Text>
              <TextInput
                style={styles.input}
                placeholder="Job"
                value={editedJob}
                onChangeText={(text) => setEditedJob(text)}
              />
            </View>
            
            <View style={styles.modalSection}>
              <Text style={styles.label}>Description:</Text>
              <TextInput
                style={styles.input}
                placeholder="Description"
                value={editedDescription}
                onChangeText={(text) => setEditedDescription(text)}
              />
            </View>
            
            <View style={styles.modalSection}>
              <Text style={styles.label}>Date:</Text>
              <TextInput
                style={styles.input}
                placeholder="YYYY-MM-DD"
                value={editedDate}
                onChangeText={(text) => setEditedDate(text)}
              />
            </View>
            
            <View style={styles.modalSection}>
              <Button title="Save" onPress={handleSaveEdit} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 30,
      marginTop: 50,
      color: 'blue',
    },
    label: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginBottom: 20,
      width: '100%',
    },
    input: {
      flex: 1,
      fontSize: 20,
    },
    listContainer: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      width: '100%',
    },
    jobContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 2, // Borde más grueso
      borderColor: 'blue',
      borderRadius: 10,
      padding: 10,
    },
    jobItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    jobItem: {
      fontSize: 18,
      marginRight: 10,
      color: 'black',
    },
    jobInfoContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    jobDescription: {
      fontSize: 12,
      color: 'gray',
    },
    jobDate: {
      fontSize: 14,
    },
    checkBox: {
      fontSize: 20,
      marginRight: 10,
      color: 'black',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
      backgroundColor: 'white',
      width: 500,
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    modalSection: {
      marginTop: 10,
    },
    deleteButton: {
      color: 'red',
    },
  });
  

export default Jobs;
