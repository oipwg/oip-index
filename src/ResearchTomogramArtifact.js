import ElasticArtifact from './ElasticArtifact'

class ResearchTomogramArtifact extends ElasticArtifact {
	constructor(artifact) {
		super(artifact)

		this.ArtifactType = 'ResearchTomogram'
	}

	/**
	 * Returns the Artifact Type (to be used before class initialization)
	 * @static
	 * @returns {string}
	 */
	static getArtifactType() {
		return "ResearchTomogram"
	}

	/**
	 * Returns the Artifact Type (to be used after class initialization)
	 * @returns {string}
	 */
	getInternalArtifactType() {
		return this.ArtifactType
	}

	/**
	* Get NCBITaxID
	*/ 
	getNCBITaxID() {
		return this.artifact.details.NCBITaxID
	}

	/**
	* Set NCBITaxID
	* @param id - NCBITaxID
	*/ 
	setNCBITaxID(id) {
		this.artifact.details.NCBITaxID = id
	}

	/**
	* Get Art Notes
	*/ 
	getArtNotes() {
		return this.artifact.details.artNotes
	}

	/**
	* Set Art Notes
	* @param artNotes
	*/ 
	setArtNotes(artNotes) {
		this.artifact.details.artNotes = artNotes
	}

	/**
	* Get Date
	*/ 
	getData() {
		return this.artifact.details.date
	}

	/**
	* Set Date
	* @param date
	*/ 
	setDate(date) {
		this.artifact.details.date = date
	}

	/**
	* Get defocus
	*/ 
	getDefocus() {
		return this.artifact.details.defocus
	}

	/**
	* Set defocus
	* @param defocus
	*/ 
	setDefocus() {
		this.artifact.details.defocus = defocus
	}

	/**
	* Get Dosage
	*/
	getDosage() {
		return this.artifact.details.dosage
	}

	/**
	* Set Dosage
	* @param dosage
	*/
	setDosage(dosage) {
		this.artifact.details.dosage = dosage
	}

	/**
	* Get Institution
	*/
	getInstitution() {
		return this.artifact.details.institution
	}

	/**
	* Set Institution
	* @param institution
	*/
	setDosage(institution) {
		this.artifact.details.institution = institution
	}

	/**
	* Get Lab
	*/
	getLab() {
		return this.artifact.details.lab
	}

	/**
	* Set Lab
	* @param lab
	*/
	setLab(lab) {
		this.artifact.details.lab = lab
	}

	/**
	* Get Magnification
	*/
	getMagnification() {
		return this.artifact.details.magnification
	}

	/**
	* Set Magnification
	* @param magnification
	*/
	setMagnification(magnification) {
		this.artifact.details.magnification = magnification
	}

	/**
	* Get Microscopist
	*/
	getMicroscopist() {
		return this.artifact.details.microscopist
	}

	/**
	* Set Microscopist
	* @param microscopist
	*/
	setMicroscopist(microscopist) {
		this.artifact.details.microscopist = microscopist
	}

	/**
	* Get Scope Name
	*/
	getScopeName() {
		return this.artifact.details.scopeName
	}

	/**
	* Set Scope Name
	* @param scopeName
	*/
	setScopeName(scopeName) {
		this.artifact.details.scopeName = scopeName
	}

	/**
	* Get SID
	*/
	getSID() {
		return this.artifact.details.sid
	}

	/**
	* Set SID
	* @param sid
	*/
	setScopeName(sid) {
		this.artifact.details.sid = sid
	}

	/**
	* Get Species Name
	*/
	getSpeciesName() {
		return this.artifact.details.speciesName
	}

	/**
	* Set Species Name
	* @param speciesName
	*/
	setScopeName(speciesName) {
		this.artifact.details.speciesName = speciesName
	}

	/**
	* Get Strain
	*/
	getStrain() {
		return this.artifact.details.strain
	}

	/**
	* Set Strain
	* @param strain
	*/
	setStrain(strain) {
		this.artifact.details.strain = strain
	}

	/**
	* Get Tilt Constant
	*/
	getTiltConstant() {
		return this.artifact.details.tiltConstant
	}

	/**
	* Set Tilt Constant
	* @param tiltConstant
	*/
	setStrain(tiltConstant) {
		this.artifact.details.tiltConstant = tiltConstant
	}

	/**
	* Get Tilt Max
	*/
	getTiltMax() {
		return this.artifact.details.tiltMax
	}

	/**
	* Set Tilt Max
	* @param tiltMax
	*/
	setTiltMax(tiltMax) {
		this.artifact.details.tiltMax = tiltMax
	}

	/**
	* Get Tilt Single-Dual
	*/
	getTiltSingleDual() {
		return this.artifact.details.tiltSingleDual
	}

	/**
	* Set Tilt Single-Dual
	* @param tiltSingleDual
	*/
	setTiltSingleDual(tiltSingleDual) {
		this.artifact.details.tiltSingleDual = tiltSingleDual
	}

	/**
	* Get Tilt Step
	*/
	getTiltStep() {
		return this.artifact.details.tiltStep
	}

	/**
	* Set Tilt Step
	* @param tiltStep
	*/
	setTiltStep(tiltStep) {
		this.artifact.details.tiltStep = tiltStep
	}

}

export default ResearchTomogramArtifact