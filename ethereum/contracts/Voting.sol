pragma solidity ^0.4.17;


contract Voting{
    address manager;
    struct Patient{
        string name;
        string age;
        string gender;
        string preMedicalRecord;
        bool isVerified;
    }
    address[] public patients;
    mapping(address => Patient) public patientDetails;
    mapping(address => string) public docterComments;

    struct Docter{
        string name;
        string age;
        string gender;
        string previousRecord;
        bool isVerified;
    }

    struct AdminDocter{
        string otherDetails;
    }

    address public currentPatient;


    address[] public docters;
    mapping(address => Docter) public docterDetails;
    mapping(address => AdminDocter) public adminDocterDetails;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Voting() public {
        manager=msg.sender;
        currentPatient = 0x0;
    }

    function CompareStrings(string memory a, string memory b) internal pure returns (bool) {
        if(bytes(a).length != bytes(b).length) {
            return false;
        } else {
            return keccak256(a) == keccak256(b);
        }
    }

    function registerPatient(string name, string age, string gender, string preMedicalRecord) public{
        Patient memory newPatient = Patient({
            name : name,
            age : age,
            gender : gender,
            preMedicalRecord : preMedicalRecord,
            isVerified : false
        });
        patientDetails[msg.sender] = newPatient;
        patients.push(msg.sender);
    }

    function registerDocter(string name, string age, string gender, string previousRecord) public{
        Docter memory newDocter = Docter({
            name : name,
            age : age,
            gender : gender,
            previousRecord : previousRecord,
            isVerified : false
        });

        docterDetails[msg.sender] = newDocter;
        docters.push(msg.sender);
    }

    function verifyPatient(address patientAddress) public restricted{
        patientDetails[patientAddress].isVerified = true;
    }

    function verifyDocter(address docterAddress) public restricted {
        docterDetails[docterAddress].isVerified = true;
    }


    function vote() public {
        if(currentPatient == 0x0)
        {
            currentPatient = msg.sender;
        }
        else
        {
            currentPatient = 0x0;
        }
    }

    function seePatientDetails()  public view returns (address){
        require(docterDetails[msg.sender].isVerified);

        return currentPatient;
    }


    function addComments(address patientAddress, string comments) public {
        require(docterDetails[msg.sender].isVerified);

        docterComments[patientAddress] = comments;

    }

    function addDocterDetails(
        address docterAddress,
        string otherDetails) public
        restricted {
        AdminDocter memory newAdminDocter = AdminDocter({
            otherDetails : otherDetails
        });
        adminDocterDetails[docterAddress] = newAdminDocter;
    }

    function getPatients() public view returns (address[])
    {
        return patients;
    }

    function getDocters() public view returns (address[])
    {
        return docters;
    }
    
    function isManager() public view returns (bool){
        return manager == msg.sender;
    }
    
}
