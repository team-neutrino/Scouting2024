#Matthias Roettger
# 6.5.2024
import pandas as pd
import csv

    
def iterateTeamNumbers(Input,Output):
    """Input = dataframe with row Team Number \n
    Output = writes all the team numbers onto a new .txt doc in order that they were put into in dataframe"""
    #Find all the team numbers
    TeamNumbers = Input.loc["Team Number"]
        #Returns it as a series

    #This is what will be returned via it being written    
    toWrite = ""
    #Loops through the amount of teams and accesses them to then 
    for team in range(len(TeamNumbers)):
        toWrite = str(TeamNumbers[team]) + ", "
        Output.write(toWrite)
    Output.write("\n")



# Function to normalize each value in the DataFrame
def normalizedRows(input,rowMin,rowMax):
    """Input = dataframe with all your data \n
    Outup = writes to new .txt file with all the new data being between 1-0 (the new data is now normalized)"""
    with open("NormalizedData.txt", 'w') as normalizedData:
        iterateTeamNumbers(input,normalizedData)
        for row_index, row in input.iterrows():
            #Returns the name of the row and the rows contents as a series
            fileLine = ""
            #This is what will be returned
            for col_index in input.columns:
                #Iterates through the columns of the sheet that you put in
                min_val = rowMin[row_index]
                max_val = rowMax[row_index]
                #Access the series of row min and maxes created earlier, except now takes only one of them
                if pd.notna(input.at[row_index, col_index]):  # Check if the value is not NaN
                    if (max_val - min_val) != 0:
                        normalized = (input.at[row_index, col_index] - min_val) / (max_val - min_val)
                        #Normalization formula
                        roundedNorm = round(normalized,2)
                        #Rounds it to 2 places
                        fileLine += str(roundedNorm) + ","
                        #Adds the result to the fileLIne
                    else:
                        continue
                else:
                    fileLine += "NaN,"  # Handle NaN values explicitly
            normalizedData.write(fileLine[:-1] + '\n')  # Remove trailing comma and add newline
            #Adds fileLine to your output document

def addNorm(input):
    """"Input = dataframe with all the normalized data \n
    Make sure the inputed dataframe has the rows set to team number and the columns set to normalized data"""
    teamScores = {}
    #Dictionary to be taken returned
    for index, row in input.iterrows():
    #Loops through the team number and row contents
        total = 0
        #This is what will be inputed into the dictionary along with the teams number
        #Resets total score so that way one teams score doesn't add with anothers

        for number in range(len(row)):
            #Loops through the length of the row
            try:
                total = total + float(row[number])
            except Exception as Error:
                print("ERROR: " + str(Error))
                continue
            #Access the individual numbers in the series of row and adds them all together
        roundedTotal = round(total,3)
        #Rounds the total score
        teamScores[index] = roundedTotal
        #Adds the team number and it's repsective score to the dictionary
    return teamScores
    #Returns the dictionary

def defineFields(file):
    """ Input: the file that you want to have the fields(column titles) and contents in that order \n
    """
    with open(file,'r') as f:
        fields = []
        contents = []
        for rowIndex, aline in enumerate(f):
                values = aline.split(',')
                values = [value.replace(" ", "") for value in values]
                if rowIndex == 0:
                    fields = values
                else:
                    contents.append(values)
    return fields, contents


def organizeScores(dictionary,output):
    """Input = unorganized or organized dictonary from addNorm
    Output = adds it to the picklist in order from greatest to least"""
    key = ""
    while len(dictionary) >= 1:
        highest = 0
        for keys in dictionary.keys():
            if float(dictionary[keys]) >= highest:
                highest = dictionary[keys]
                key = str(keys)
        output.write(str(key) + ": " + str(dictionary[key]) + "\n")
        del dictionary[key]

def main():
    #Input your dataframe here as a CSV
    data = pd.read_csv("Central Missouri Regional - 2024 Scouting Spreadsheet - TeamPivot (1).csv")
    df = pd.DataFrame(data)
    #Drop all data that wont normalize well or you don't care about
    droppedColumns = df.drop(["AVERAGE of Fouls","Auton Accuracy ","AVERAGE of Auton Speaker","AVERAGE of Auton Speaker Miss",
            "AVERAGE of Auton Amp","AVERAGE of Auton Amp Miss","AVERAGE of Teleop Speaker Miss",
            "AVERAGE of Teleop Amp Miss","SUM of Climb","SUM of Failed Climb","Climb Accuracy","AVERAGE of Failed Trap",
            "SUM of Harmony","STDEV of Total Score","AVERAGE of Total Pieces"],axis="columns")
    #Transpose so that the Team Numbers are the columns and data point values/categories are rows
    updatedData = droppedColumns.transpose()
    #Makes everything numeric, and makes errors NaN
    #Although ideally your dataset has none
    updatedData = updatedData.apply(pd.to_numeric, errors='coerce')

    #Update rowMin and rowMax to your current dataframe
    rowMin = updatedData.min(axis="columns")
    rowMax = updatedData.max(axis="columns")


    #Allows you to write to your new .txt files you shouldn't need to replace these as these will adapt to your data
    with open("NormalizedData.txt", 'w') as normtxt:
        #Setups the document so that the normalized data has a corresponding team
        # Call the normalization function and returns a .txt file
        normalizedRows(updatedData,rowMin,rowMax)

    NormDtoCSV = "NormalizedData.csv"
    with open(NormDtoCSV,"w") as NormCSV:

        csvWriter = csv.writer(NormCSV)        
        file_path = "NormalizedData.txt"
        fields, contents = defineFields(file_path)

        csvWriter.writerow(fields)
        csvWriter.writerows(contents)

    normData = pd.read_csv("NormalizedData.csv")

        #Cleans and reads the .txt file
    normData.drop(0,axis="index",inplace=True)
    removeBadRow = normData.drop('\n', axis=1)
    removeNA = removeBadRow.fillna(value=0)
    removeNA.reset_index(drop=True,inplace=True)
    updateNormData = removeNA.transpose()

    with open("GeneratePicklist.txt", 'w') as picklist:
        organizeScores(addNorm(updateNormData),picklist)

if __name__ == "__main__":                      
    main()
