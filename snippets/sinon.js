const dbStub = sinon.stub(db, 'getData').callsFake(() => {
    return Promise.resolve(response);
});

const dbSpyy = sinon.spy(db, 'getData');
expect(db.getData(0).args[0]).to.deep.equal({
    success: true,
});